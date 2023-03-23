/**
 * @description 格式化处理字符串
 * @version 1.0.0
 * @param { String } str 要处理的字符串
 * @param { Number } size 处理后字符串每段长度，默认为3，从右边开始数
 * @param { String } delimiter 处理后字符串的分隔符，默认为英文逗号(,)
 * @returns { String } 格式化后的字符串
 */
export const formatText = (str: string, size: number = 3, delimiter: string  = ','): string => {
  let _size = size, _delimiter = delimiter;
  let regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
  let reg = new RegExp(regText, 'g');
  return str.replace(reg, _delimiter);
}
