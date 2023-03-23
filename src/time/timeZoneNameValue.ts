/**
 * @description 获得时区名和值
 * @version 1.0.0
 * @param { Object } dateObj 时间对象
 * @returns { Object } 时区名和值的对象
 */
export const timeZoneNameValue = (dateObj: any): object => {
  let date = new Date(dateObj);
  date = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  let arr:any = date.toString().match(/([A-Z]+)([-+]\d+:?\d+)/);
  let obj = {
    name: arr[1],
    value: arr[2],
  };
  return obj;
}
