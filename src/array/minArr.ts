/**
 * @description 数组最小值
 * @version 1.0.0
 * @param { Array } arr 数组的最小值，数组中的每项只能是数字
 * @returns { Number } 最小值
 */
 export const minArr = (arr: number[]): number => {
  return Math.min.apply(null, arr);
}
