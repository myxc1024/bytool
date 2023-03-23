test();
function test() {
  if (!bytool.version()) {
    console.error("error");
    return;
  }

  console.log("其他所有方法检测通过");
}