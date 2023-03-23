test();
function test() {
  // timestampToTime
  if (
    bytool.timestampToTime(1678676884368) != '2023-03-13 11:08:04' ||
    bytool.timestampToTime(1678676884368, 'yyyyMMdd') != '20230313' ||
    bytool.timestampToTime(1678676884368, 'yyyy/MM/dd') != '2023/03/13' ||
    bytool.timestampToTime(1678676884368, 'yyyy-MM-dd hh:mm:ss') != '2023-03-13 11:08:04' ||
    bytool.timestampToTime(1678676884368, 'yyyy年MM月dd日') != '2023年03月13日' ||
    bytool.timestampToTime(1678676884368, 'yyyy-MM-dd') != '2023-03-13' ||
    bytool.timestampToTime(1678676884368, 'yyyy#MM#dd') != '2023#03#13'
  ) {
    console.error("error");
    return;
  }
  // getEndTime
  if (!bytool.getEndTime("2023/7/22 13:00:00")) {
    console.error("error");
    return;
  }
  // timeZoneNameValue
  if (
    !bytool.timeZoneNameValue(new Date()) ||
    !bytool.timeZoneNameValue("2022-02-07T06:56:55.829Z")
  ) {
    console.error("error");
    return;
  }
  // leapYear
  if (
    !bytool.leapYear(2008) ||
    bytool.leapYear(2010)
  ) {
    console.error("error");
    return;
  }
  // dayOfTheYear
  if (bytool.dayOfTheYear("2022-11-12") != 316) {
    console.error("error");
    return;
  }
  // dayOfMonth
  if (bytool.dayOfMonth(2008, 2) != 29) {
    console.error("error");
    return;
  }
  // compareTime
  if (bytool.compareTime("2022/08/07 12:26:11", "2022/08/08 12:26:11") != -1) {
    console.error("error");
    return;
  }

  console.log("时间所有方法检测通过");
}