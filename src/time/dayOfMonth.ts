/**
 * @description 获取某个月的天数
 * @version 1.0.0
 * @param { Number } year 年
 * @param { Number } month 月
 * @returns { Number } 某个月的天数
 */
export const dayOfMonth = (year: number, month: number) => {
  let date = new Date(year, month, 0);
  return date.getDate();
}
