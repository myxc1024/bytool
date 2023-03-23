/**
 * @description 随机码
 * @version 1.0.0
 * @param { Number } count 要产生随机码radix，取值范围2-36，默认为10
 * @returns { String } 随机码
 */
export const randomWord = (count: number = 10): string => {
  return Math.random().toString(count).substring(2);
}
