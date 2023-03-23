/**
 * @description 减法精确计算，避免数据相减小数点后产生多位数和计算精度损失
 * @version 1.0.0
 * @param { Number } num1 被减数
 * @param { Number } num2 减数2
 * @returns { String } 相减结果
 */
export const numSub = (num1: number, num2: number): number => {
  let baseNum, baseNum1, baseNum2;
  let precision; // 精度
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
  return Number(((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision));
}
