/**
 * @description 过滤字符串(html标签，表情，特殊字符)
 * @version 1.0.0
 * @param { String } str 要替换内容的字符串
 * @param { String } type 替换内容字符，如果需要过滤多种字符，type参数使用英文逗号(,)分隔。（special-特殊字符,html-html标签,emjoy-emjoy表情,word-小写字母，WORD-大写字母，number-数字,chinese-中文），要替换成什么，默认'',保留哪些特殊字符
 * @param { String } restr 替换的字符串展现形式
 * @param { String } spstr 是否有哪些特殊符号需要保留
 * @returns { String } 过滤后的字符串
 */
export declare const filterStr: (str: string, type: string, restr: string, spstr: string) => string;
