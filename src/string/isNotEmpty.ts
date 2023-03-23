import { isNotNull } from './isNotNull'
/**
 * @description 判断字符串或数组是否为空
 * @version 1.0.0
 * @param { String, Array } obj 用于判断的字符串或数组
 * @returns { Boolean } 判断结果
 */
export const isNotEmpty = (obj: any): boolean => {
  let result = false;
  if (isNotNull(obj)) {
    if (typeof obj == "string") {
      if (obj.length > 0) {
        result = true;
      }
    } else if (typeof obj == "number") {
      result = true;
    } else if (typeof obj == "object") {
      if (obj instanceof Array) {
        if (obj.length > 0) {
          result = true;
        }
      } else {
        result = true;
      }
    } else {
      result = true;
    }
  }
  return result;
}
