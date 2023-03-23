/**
 * @description 字母大小写切换
 * @version 1.0.0
 * @param { String } str 要切换的字符串 
 * @param { Number } type 切换类型 1:首字母大写 2：首母小写 3：大小写转换 4：全部大写 5：全部小写
 * @returns { String } 切换后的字符串
 */
export const changeCase = (str: string, type: CaseType = 1) => {
  switch (type) {
    case CaseType.FirstUpperCase:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case CaseType.FirstLowerCase:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case CaseType.ChangeCase:
      return toggleCase(str);
    case CaseType.AllUpperCase:
      return str.toUpperCase();
    case CaseType.AllLowerCase:
      return str.toLowerCase();
    default:
      return str;
  }
}

export enum CaseType {
  FirstUpperCase = 1,
  FirstLowerCase,
  ChangeCase,
  AllUpperCase,
  AllLowerCase,
}

const toggleCase = (str: string) => {
  let itemText = "";
  str.split("").forEach(function (item) {
    if (/^([a-z]+)/.test(item)) {
      itemText += item.toUpperCase();
    } else if (/^([A-Z]+)/.test(item)) {
      itemText += item.toLowerCase();
    } else {
      itemText += item;
    }
  });
  return itemText;
}
