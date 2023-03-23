/**
 * @description 比较两个时间大小
 * @version 1.0.0
 * @param { String } time1 时间1
 * @param { String } time2 时间2
 * @returns { Number } 比较后时间的大小，1： time1 > time2  -1：time1 < time2  0： time1 == time2
 */
export const compareTime = (time1: string, time2: string) => {
  if (Date.parse(time1.replace(/-/g, "/")) > Date.parse(time2.replace(/-/g, "/"))) {
    return 1;
  } else if (Date.parse(time1.replace(/-/g, "/")) < Date.parse(time2.replace(/-/g, "/"))) {
    return -1;
  } else if (Date.parse(time1.replace(/-/g, "/")) == Date.parse(time2.replace(/-/g, "/"))) {
    return 0;
  }
}
