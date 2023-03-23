/**
 * 获得到n1-n2下标的数组
 * @version 1.0.0
 * @param { Array } arr 原数组
 * @param { Number } n1 开始下标
 * @param { Number } n2 结束下标，不传该参数,默认返回从n1到数组结束的元素
 * @returns { Array } 获得结果的数组
 */
export const getArrayNum = (arr: any[], n1: number, n2: number): any[] => {
  return arr.slice(n1, n2);
}
