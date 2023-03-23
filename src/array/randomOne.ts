/**
 * @description 从数组中随机获取一个元素
 * @version 1.0.0
 * @param { Array } arr 获取元素的数组
 * @returns { String, Number, Object, Array } 获取的元素
 */
export const randomOne = (arr: any[]): any => {
  return arr[Math.floor(Math.random() * arr.length)];
}
