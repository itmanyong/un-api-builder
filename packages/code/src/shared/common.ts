/**
 * 获取最终值
 * @param source 原始值或函数
 * @param args 函数执行参数
 * @returns 最终值
 */
export const toValue = <T>(source: T | ((...args: any[]) => T), ...args: any[]): T => {
  return typeof source === "function" ? (source as (...args: any[]) => T)(...args) : source;
};

/**
 * 首字母大写
 * @param str 原始字符串
 * @returns 首字母大写后的字符串
 */
export const capitalizeUpper = (str: string): string => {
  if (/^[a-z]/.test(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

/**
 * 转化字符串为符合命名规范的小驼峰命名
 * @param args 字符串数组
 * @returns 小驼峰命名后的字符串
 */
export const toVariableNameCamelCase = (...args: string[]): string => {
  const toVariableName = (str: string) => capitalizeLower(str.replace(/[^a-zA-Z0-9]/g, "").replace(/^[0-9]/, "_$&"));

  return args
    .map((item, index) => {
      const varName = toVariableName(item);
      return index === 0 ? varName : capitalizeUpper(varName);
    })
    .join("");
};

/**
 * 首字母小写
 * @param str 原始字符串
 * @returns 首字母小写后的字符串
 */
const capitalizeLower = (str: string): string => {
  if (/^[A-Z]/.test(str)) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  return str;
};