test();
function test() {
  // numAdd
  if (bytool.numAdd(0.1, 0.2) != 0.3) {
    console.error("error");
    return;
  }
  // numSub
  if (bytool.numSub(1, 0.9) != 0.1) {
    console.error("error");
    return;
  }
  // numMulti
  if (bytool.numMulti(0.1, 0.2) != 0.02) {
    console.error("error");
    return;
  }
  // numDiv
  if (bytool.numDiv(0.9, 100) != 0.009) {
    console.error("error");
    return;
  }
  // percent
  if (bytool.percent(35, 365) != '9.59%') {
    console.error("error");
    return;
  }
  // fillStr
  if (
    bytool.fillStr("") != 0 ||
    bytool.fillStr("-") != 0
  ) {
    console.error("error");
    return;
  }
  // dataType
  if (!bytool.dataType('abc', "String")) {
    console.error("error");
    return;
  }

  console.log("数据所有方法检测通过")
}