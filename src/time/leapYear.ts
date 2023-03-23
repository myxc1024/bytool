/**
 * @description 是否闰年
 * @version 1.0.0
 * @param { Number } year 用于判断的年份
 * @returns { Boolean } 是否闰年
 */
export const leapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
