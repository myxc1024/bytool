test();
function test() {
  // numAdd
  if (bytool.numAdd(0.1, 0.2) != 0.3) {
    console.error("error");
    return;
  }

  console.log("数据所有方法检测通过")
}