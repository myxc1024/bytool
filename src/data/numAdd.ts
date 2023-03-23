/**
 * @description 加法精确计算，避免数据相加小数点后产生多位数和计算精度损失
 * @version 1.0.0
 * @param { Number } num1 加数1
 * @param { Number } num2 加数2
 * @returns { Number } 相加结果
 */
export const numAdd = (num1: number, num2: number): number => {
  let baseNum, baseNum1, baseNum2;
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
  return (num1 * baseNum + num2 * baseNum) / baseNum;
}
