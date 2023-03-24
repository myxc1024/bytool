/**
 * @description 获得数组出现最多的几次元素和出现次数
 * @version 1.0.0
 * @param { Array } arr 参与统计的数组
 * @param { Number } rank 长度，默认为数组长度
 * @param { Number } rankType 排序方式，默认降序 为1，则为升序，其它传参或者不传为降序
 * @returns  { Object } 出现最多的几次元素和出现次数的对象，el->元素，count->次数
 */
export declare const getCount: (arr: any[], rank: number, rankType: number) => any;
