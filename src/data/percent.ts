/**
 * @description 计算百分比
 * @version 1.0.0
 * @param { Number } num 子额
 * @param { Number } total 总额
 * @returns { String } 百分比
 */
export const percent = (num: number, total: number): string => {
  if (isNaN(num) || isNaN(total)) {
    return "-";
  }
  return total <= 0 ? "0%" : Math.round((num / total) * 10000) / 100.0 + "%";
}
