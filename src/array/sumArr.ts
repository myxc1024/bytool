/**
 * @description 数组求和
 * @version 1.0.0
 * @param { Array } arr 要求和的数组，数组中每一项必须是数字Number类型
 * @returns { Number } 求和的结果
 */
export const sumArr = (arr: any[]): number => {
  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
}
