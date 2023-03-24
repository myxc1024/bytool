/**
 * @description 检测字符串类型
 * @version 1.0.0
 * @param { String } str 要检测的字符串
 * @param { String } type 检测类型：邮箱 email、手机 phone、电话 tel、数字 number、英语 english、中文 chinese、小写 lower、大写 upper
 * @returns { Boolean } 是否为传入比对的类型
 */
export declare const checkStringType: (str: string, type: string) => boolean;
