/**
 * @description 判断对象是否为空
 * @version 1.0.0
 * @param { Object } obj 用于判断的对象
 * @returns { Boolean } 判断结果
 */
export const isNotNull = (obj: object): boolean => {
  if (typeof obj == "number") {
    if (!isNaN(obj)) {
      return true;
    }
  } else if (typeof obj == "boolean") {
    if (obj != null && obj !== undefined) {
      if (
        (obj + "").toLowerCase() == "false" ||
        (obj + "").toLowerCase() == "true"
      ) {
        return true;
      }
    }
  } else {
    if (obj && obj != null && obj !== undefined && Object.keys(obj).length != 0) {
      return true;
    }
  }
  return false;
}
