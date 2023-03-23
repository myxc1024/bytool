/**
 * @description 检测字符串类型
 * @version 1.0.0
 * @param { String } str 要检测的字符串
 * @param { String } type 检测类型：邮箱 email、手机 phone、电话 tel、数字 number、英语 english、中文 chinese、小写 lower、大写 upper
 * @returns { Boolean } 是否为传入比对的类型
 */
 export const checkStringType = (str: string, type: string): boolean => {
  switch (type) {
    case 'email':
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'phone':
      return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
    case 'tel':
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'number':
      return /^[0-9]$/.test(str);
    case 'english':
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese':
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower':
      return /^[a-z]+$/.test(str);
    case 'upper':
      return /^[A-Z]+$/.test(str);
    default:
      return false;
  }
}
