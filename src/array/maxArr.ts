/**
 * @description 数组最大值
 * @version 1.0.0
 * @param { Array } arr 数组的最大值，数组中的每项只能是数字
 * @returns { Number } 最大值
 */
export const maxArr = (arr: number[]): number => {
  return Math.max.apply(null, arr);
}
