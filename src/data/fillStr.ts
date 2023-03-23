/**
 * @description 空或"-"替换为0，主要用在处理后端返回的数据为空或者返回一个"-"的时候，展示成0
 * @version 1.0.0
 * @param { String } str 要替换的字符
 * @returns { String } 替换后的0
 */
export const fillStr = (str: string): string => {
  str = str.replace(/(^\s*)|(\s*$)/g, "") == "" ? "0" : str;
  str = str.replace(/(^\s*)|(\s*$)/g, "") == "-" ? "0" : str;
  return str;
}
