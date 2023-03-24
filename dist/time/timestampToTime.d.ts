/**
 * @description 时间戳转日期
 * @version 1.0.0
 * @param { Number } timestamp 时间戳
 * @param { String } fmt 转换后的日期格式，如："yyyyMMdd"、"yyyy/MM/dd"、"yyyy-MM-dd hh:mm:ss"、"yyyy年MM月dd日"、"yyyy-MM-dd"等等
 * @returns { String } 转换后的日期
 */
export declare const timestampToTime: (timestamp: string, fmt?: string) => string;
