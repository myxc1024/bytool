/**
 * @description 手机浏览器类型判断
 * @version 1.0.0
 * @param { String } type 手机浏览器类型
 * @returns { Boolean } 是否为该手机浏览器类型
 */
export const isPhoneBrowserType = (type: string): boolean => {
  switch (type) {
    case 'android':
      return navigator.userAgent.toLowerCase().indexOf('android') !== -1;
    case 'iphone':
      return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;
    case 'ipad':
      return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;
    case 'weixin':
      return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    default:
      return false;
  }
}
