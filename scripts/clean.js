import { exec } from 'node:child_process';
import { promisify } from 'node:util';

/**
 * @description: 清理命令行目录下所有的产物目录、依赖目录、锁文件等非必要文件资源
 */
import path from "node:path";
import fs from "node:fs/promises";

const execAsync = promisify(exec);
/**
 * 查找指定名称的目录或文件（非递归方式，增强版）
 * @param {string} rootDir - 搜索的根目录
 * @param {string[]} targetNames - 要查找的名称数组
 * @param {Object} options - 配置选项
 * @param {'directory' | 'file' | 'both'} options.type - 查找类型
 * @param {boolean} options.ignoreCase - 是否忽略大小写
 * @param {number} options.maxDepth - 最大搜索深度
 * @param {string[]} options.excludeDirs - 要排除的目录名
 * @param {boolean} options.includeHidden - 是否包含隐藏文件/目录
 * @returns {Promise<Object>} 返回按名称分类的结果对象
 */
async function findTargetsEnhanced(rootDir, targetNames, options = {}) {
  const { type = "directory", ignoreCase = false, maxDepth = Infinity, excludeDirs = ["node_modules", ".git"], includeHidden = false } = options;

  const results = {};
  // 使用队列存储待处理的目录及其深度
  const queue = [{ path: rootDir, depth: 0 }];

  // 标准化目标名称（如果需要忽略大小写）
  const normalizedTargetNames = ignoreCase ? targetNames.map((name) => name.toLowerCase()) : targetNames;

  // 标准化排除目录
  const normalizedExcludeDirs = ignoreCase ? excludeDirs.map((dir) => dir.toLowerCase()) : excludeDirs;

  // 初始化结果对象
  targetNames.forEach((name) => {
    results[name] = [];
  });

  while (queue.length > 0) {
    const { path: currentDir, depth } = queue.shift();

    if (depth > maxDepth) continue;

    try {
      const items = await fs.readdir(currentDir, { withFileTypes: true });

      for (const item of items) {
        // 检查是否隐藏文件/目录
        if (!includeHidden && item.name.startsWith(".")) {
          continue;
        }

        const itemName = ignoreCase ? item.name.toLowerCase() : item.name;
        const fullPath = path.join(currentDir, item.name);

        // 检查是否是目标名称之一
        const targetIndex = normalizedTargetNames.indexOf(itemName);
        if (targetIndex !== -1) {
          const originalName = targetNames[targetIndex];

          // 检查类型是否符合要求
          const isDirectory = item.isDirectory();
          const isFile = item.isFile();

          const shouldAdd = type === "both" || (type === "directory" && isDirectory) || (type === "file" && isFile);

          if (shouldAdd) {
            try {
              const stat = await fs.stat(fullPath);
              results[originalName].push({
                path: fullPath,
                type: isDirectory ? "directory" : "file",
                size: isFile ? stat.size : undefined,
                mtime: stat.mtime,
                depth: depth,
                relativePath: path.relative(rootDir, fullPath),
              });
            } catch (statErr) {
              // 忽略无法获取stat的项目
            }
          }
        }

        // 如果是目录且需要进一步搜索
        if (item.isDirectory()) {
          // 检查是否在排除列表中
          const shouldExclude = normalizedExcludeDirs.includes(itemName);
          if (!shouldExclude) {
            queue.push({ path: fullPath, depth: depth + 1 });
          }
        }
      }
    } catch (err) {
      // 忽略无权限访问的目录
      continue;
    }
  }

  return results;
}

async function clean() {
  try {
    console.log(`正在检索需要清理的文件/文件夹...`);
    const dirs = ["dist", "node_modules", "build", ".history", ".turbo"];
    const files = ["package-lock.json", "pnpm-lock.yaml", "yarn.lock", "bun.lock", "auto-imports.d.ts", "components.d.ts"];
    const options = {
      type: "both",
      ignoreCase: true,
      maxDepth: 3,
      excludeDirs: [".git", ".vscode"],
      includeHidden: false,
    };
    const results = await findTargetsEnhanced(process.cwd(), [...dirs, ...files], options);
    console.log(`正在清理检索命中的文件/文件夹...`);

    const resultList = Object.entries(results);
    for (let i = 0; i < resultList.length; i++) {
      const [, list] = resultList[i];
      if (!list.length) continue;
      for (let j = 0; j < list.length; j++) {
        const item = list[j];
        if (item.type === "directory") {
          try {
            await execAsync(`rmdir /s /q "${item.path}"`);
            console.log(`已清理目录: ${item.relativePath}`);
          } catch (err) {
            console.error(`清理目录 ${item.relativePath} 失败:`, err.message);
          }
          continue;
        }
        try {
          await execAsync(`del /f /q "${item.path}"`);
          console.log(`已清理文件: ${item.relativePath}`);
        } catch (err) {
          console.error(`清理文件 ${item.relativePath} 失败:`, err.message);
        }
      }
    }
    console.log("清理完成!!!");
  } catch (err) {
    console.error("清理过程中出错:", err);
  }
}

clean();
