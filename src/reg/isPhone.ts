/**
 * 检查字符串是否为合法手机号码
 * @version 1.0.0
 * @param { String } phone 手机号码
 * @returns { Boolean } 是否是手机号码
 */
export const isPhone = (phone: string): boolean => {
  let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
  if (reg.test(phone)) { // 是手机号码
    return true;
  } else { // 不是手机号码
    return false;
  }
}
