/**
 * @description 数组顺序随机打乱
 * @version 1.0.0
 * @param { Array } arr 要打乱的数组
 * @returns { Array } 打乱后的数组
 */
export const upsetArr = (arr: any[]): any[] => {
  return arr.sort(function () {
    return Math.random() - 0.5
  });
}
