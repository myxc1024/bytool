/**
 * @description 数据类型判断
 * @version 1.0.0
 * @param { Object } obj 要判断的数据对象
 * @param { String } type 数据类型
 * @returns { Boolean } 是否为传入的数据类型
 */
export const dataType = (obj: any, type: string): boolean => {
  let _type;
  if (type) {
    _type = type.toLowerCase();
  }
  switch (_type) {
    case 'string':
      return Object.prototype.toString.call(obj) === '[object String]';
    case 'number':
      return Object.prototype.toString.call(obj) === '[object Number]';
    case 'boolean':
      return Object.prototype.toString.call(obj) === '[object Boolean]';
    case 'undefined':
      return Object.prototype.toString.call(obj) === '[object Undefined]';
    case 'null':
      return Object.prototype.toString.call(obj) === '[object Null]';
    case 'function':
      return Object.prototype.toString.call(obj) === '[object Function]';
    case 'array':
      return Object.prototype.toString.call(obj) === '[object Array]';
    case 'object':
      return Object.prototype.toString.call(obj) === '[object Object]';
    case 'nan':
      return isNaN(obj);
    case 'elements':
      return Object.prototype.toString.call(obj).indexOf('HTML') !== -1
    default:
      return false
  }
}
