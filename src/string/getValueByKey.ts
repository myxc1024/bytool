import { isKeyInObj } from './isKeyInObj'
/**
 * @description 根据key获取value（key不存在时，返回false）
 * @version 1.0.0
 * @param { String } key 键
 * @param { Object } obj 用于判断的对象
 * @param { String } default_value 默认值false（当key不存在时，返回）
 * @returns { String } 获取结果
 */
export const getValueByKey = (key: string, obj: any, default_value: string = "false"): string => {
  if (isKeyInObj(key, obj)) {
    return obj[key];
  }
  return default_value;
}
