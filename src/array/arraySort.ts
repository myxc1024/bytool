/**
 * @description 对象数组排序
 * @version 1.0.0
 * @param { Array } arr 参与排序的数组
 * @param { String } sortText 排序条件
 * @returns { Array } 排序后的数组
 */
export const arraySort = (arr: any[], sortText: string): any[] => {
  if (!sortText) {
    return arr
  }
  let _sortText = sortText.split(',').reverse(), _arr = arr.slice(0);
  for (let i = 0, len = _sortText.length; i < len; i++) {
    _arr.sort(function (n1, n2) {
      return n1[_sortText[i]] - n2[_sortText[i]];
    })
  }
  return _arr;
}
