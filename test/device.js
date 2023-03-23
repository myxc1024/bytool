test();
function test() {
  // getOS
  if (!bytool.getOS()) {
    console.error("error");
    return;
  }
  // isPhoneBrowserType .........
  // getExplore
  if (!bytool.getExplore()) {
    console.error("error");
    return;
  }
  // isWeixin .........

  console.log("设备所有方法检测通过")
}