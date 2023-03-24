/**
 * @description 字母大小写切换
 * @version 1.0.0
 * @param { String } str 要切换的字符串
 * @param { Number } type 切换类型 1:首字母大写 2：首母小写 3：大小写转换 4：全部大写 5：全部小写
 * @returns { String } 切换后的字符串
 */
export declare const changeCase: (str: string, type?: CaseType) => string;
export declare enum CaseType {
    FirstUpperCase = 1,
    FirstLowerCase = 2,
    ChangeCase = 3,
    AllUpperCase = 4,
    AllLowerCase = 5
}
