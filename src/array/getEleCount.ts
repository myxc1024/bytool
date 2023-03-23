/**
 * @description 数组中一个元素出现的次数
 * @version 1.0.0
 * @param { String, Number, Object, Array } obj 数组对象
 * @param { String, Number, Object, Array } ele 要统计的元素
 * @returns { Number } 要統計的元素出现的次数
 */
export const getEleCount = (obj: any, ele: any): number => {
  let num = 0;
  for (let i = 0, len = obj.length; i < len; i++) {
    if (ele === obj[i]) {
      num++;
    }
  }
  return num;
}
