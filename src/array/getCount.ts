/**
 * @description 获得数组出现最多的几次元素和出现次数
 * @version 1.0.0
 * @param { Array } arr 参与统计的数组
 * @param { Number } rank 长度，默认为数组长度
 * @param { Number } rankType 排序方式，默认降序 为1，则为升序，其它传参或者不传为降序
 * @returns  { Object } 出现最多的几次元素和出现次数的对象，el->元素，count->次数
 */
export const getCount = (arr: any[], rank: number, rankType: number): any => {
  let obj = [],
    k, arr1 = []
  // 记录每一元素出现的次数
  for (let i = 0, len = arr.length; i < len; i++) {
    k = arr[i];
    if (obj[k]) {
      obj[k]++;
    } else {
      obj[k] = 1;
    }
  }
  // 保存结果{el-'元素'，count-出现次数}
  for (let o in obj) {
    arr1.push({ el: o, count: obj[o] });
  }
  // 排序（降序）
  arr1.sort(function (n1, n2) {
    return n2.count - n1.count
  });
  // 如果rankType为1，则为升序，反转数组
  if (rankType === 1) {
    arr1 = arr1.reverse();
  }
  let rank1 = rank || arr1.length;
  return arr1.slice(0, rank1);
}
