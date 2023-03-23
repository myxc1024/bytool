test();
function test() {
  // randomColor
  if (!bytool.randomColor()) {
    console.error("error");
    return;
  }
  // randomNum
  if (!bytool.randomNum(10, 50)) {
    console.error("error");
    return;
  }


  console.log("随机值所有方法检测通过")
}