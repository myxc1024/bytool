import { leapYear } from "./leapYear";
/**
 * @description 获得一个日期是当年的第几天
 * @version 1.0.0
 * @param { String } date 日期
 * @returns { Number } 当年的第几天
 */
export const dayOfTheYear = (date: string): number => {
  let obj = new Date(date);
  let year = obj.getFullYear();
  let month = obj.getMonth(); // 从0开始
  let days = obj.getDate();
  let daysArr = [31, (leapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < month; i++) {
    days += daysArr[i];
  }
  return days;
}
