import type { PluginOptions, RecordType, DocResult } from "@/types";
import pc from "picocolors";
import { DEFAULT_DOC_CONFIG, loadConfig } from "./config";
import { LIB_NAME, getFullPath } from "@/shared";
import { defineDoc } from "./doc";
import { mkdir, writeFile } from "fs/promises";
import { Table } from "console-table-printer";
import { mkdirSync, readFileSync } from "fs";

const formatDuration = (ms: number): string => {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`;
  return `${(ms / 60000).toFixed(2)}m`;
};

const printSummaryTable = (results: DocResult[]): void => {
  if (results.length === 0) {
    console.info(pc.yellow("No documents were generated."));
    return;
  }

  const table = new Table({
    title: pc.green(LIB_NAME + " Generate Summary"),
    columns: [
      { name: "标识", alignment: "left", color: "green" },
      { name: "输出路径", alignment: "left" },
      { name: "模块总数", alignment: "right" },
      { name: "接口总数", alignment: "right" },
      { name: "类型总数", alignment: "right" },
      { name: "耗时", alignment: "right", color: "cyan" },
    ],
  });

  for (const result of results) {
    const { api, ts } = result;
    table.addRow({
      标识: result.docConfig.name,
      输出路径: result.docConfig.output,
      模块总数: api.moduleTotal ?? 0,
      接口总数: api.apiTotal ?? 0,
      类型总数: ts.tsTotal ?? 0,
      耗时: formatDuration(result.durationMs),
    });
  }

  const totalMs = results.reduce((sum, r) => sum + r.durationMs, 0);
  table.addRow({
    标识: "Total",
    输出路径: "",
    模块总数: results.reduce((sum, r) => sum + (r.api.moduleTotal ?? 0), 0),
    接口总数: results.reduce((sum, r) => sum + (r.api.apiTotal ?? 0), 0),
    类型总数: results.reduce((sum, r) => sum + (r.ts.tsTotal ?? 0), 0),
    耗时: formatDuration(totalMs),
  });
  // 清除之前的日志
  console.clear();
  console.log();
  table.printTable();
  console.log();
};

/**
 * 运行主入口
 * @param options 插件选项
 */
export const defineRun = async (options?: PluginOptions): Promise<void> => {
  console.info(`\n➜ ${pc.bold(pc.green(LIB_NAME))} ${pc.dim("start running")}\n`);

  const docConfigList = loadConfig(options?.configPath);
  const cachePath = getFullPath(DEFAULT_DOC_CONFIG.cache.path, "config.json");

  let cacheConfig = { cache: { expires: {} } } as RecordType;
  try {
    await mkdir(cachePath);
    cacheConfig = JSON.parse(readFileSync(cachePath, { encoding: "utf-8" }));
  } catch {}

  const runDocResultList: Promise<DocResult>[] = [];

  for (const docConfig of docConfigList) {
    if (!docConfig.enable) continue;

    if (docConfig.cache?.enable === true && docConfig.cache.expireTime > 0) {
      const expires = cacheConfig.cache?.expires?.[docConfig.name] ?? 0;
      if (Date.now() < expires) continue;
    }

    runDocResultList.push(defineDoc(docConfig));
  }

  const results = await Promise.all(runDocResultList);

  mkdirSync(cachePath, { recursive: true });
  writeFile(cachePath, JSON.stringify(cacheConfig, null, 2), {
    encoding: "utf-8",
    flag: "w",
    flush: true,
  });

  printSummaryTable(results);
};
