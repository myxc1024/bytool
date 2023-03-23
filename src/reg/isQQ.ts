/**
 * @description 检查字符串是否为合法QQ号码
 * @version 1.0.0
 * @param { String } qq QQ号码
 * @returns { Boolean } 是不是QQ号码
 */
export const isQQ = (qq: string): boolean => {
  // 1 首位不能是0  ^[1-9]
  // 2 必须是 [5, 11] 位的数字  \d{4, 9}
  let reg = /^[1-9][0-9]{4,9}$/gim;
  if (reg.test(qq)) { // QQ号码格式正确
    return true;
  } else { // QQ号码格式错误
    return false;
  }
}
