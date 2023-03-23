test();
function test() {
  // digitUppercase
  if (bytool.digitUppercase(15425424.69) != '壹仟伍佰肆拾贰万伍仟肆佰贰拾肆元陆角玖分') {
    console.error("error");
    return;
  }
  // tranNumber
  if (
    bytool.tranNumber(26742238) != '2674.22万' ||
    bytool.tranNumber(1000, 2) != '1000' ||
    bytool.tranNumber(26742238, 3) != '2674.223万' ||
    bytool.tranNumber(1234787325, 4) != '12.3478亿'  
    ) {
    console.error("error");
    return;
  }

  console.log("金额所有方法检测通过")
}