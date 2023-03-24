/**
 * @description 超大金额(千位符)处理，数字超大时-末尾添加相应的单位
 * @version 1.0.0
 * @param { Number } num 金额
 * @param { Number } point 保留数字的第几位
 * @returns { String } 转换后的大写金额
 */
export declare const tranNumber: (num: number, point?: number) => string | undefined;
