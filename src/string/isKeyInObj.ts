import { isNotEmpty } from './isNotEmpty'
import { isNotNull } from './isNotNull'
/**
 * @description 判断key是否在对象中
 * @version 1.0.0
 * @param { String } key 键
 * @param { Object } obj 用于判断的对象
 * @returns { Boolean } 判断结果
 */
export const isKeyInObj = (key: string, obj: object): boolean => {
  if (isNotNull(obj)) {
    if (isNotEmpty(key)) {
      if (key in obj) {
        return true;
      }
    }
  }
  return false;
}
