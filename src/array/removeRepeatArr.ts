/**
 * @description 数组去重
 * @version 1.0.0
 * @param { Array } arr 要去重的数组
 * @returns { Array } 去重后的数组
 */
export const removeRepeatArr = (arr: any[]): any[] => {
  return arr.filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
}
