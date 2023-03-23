/**
 * @description 检测密码强度
 * @version 1.0.0
 * @param { String } str 要检测强度的密码
 * @returns { Number } 密码强度，分0-4级，0级最若，4级最强
 */
export const checkPwdStrength = (str: string): number => {
  let nowLv = 0;
  if (str.length < 6) {
    return nowLv
  }
  if (/[0-9]/.test(str)) {
    nowLv++
  }
  if (/[a-z]/.test(str)) {
    nowLv++
  }
  if (/[A-Z]/.test(str)) {
    nowLv++
  }
  if (/[\.|~!@#$%^&*()-|_]/.test(str)) {
    nowLv++
  }
  return nowLv;
}
