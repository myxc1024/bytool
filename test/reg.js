test();
function test() {
  // isQQ
  if (!bytool.isQQ("61265611")) {
    console.error("error");
    return;
  }
  // isPhone
  if (!bytool.isPhone("13111111111")) {
    console.error("error");
    return;
  }

  console.log("正则所有方法检测通过")
}