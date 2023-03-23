test();
function test() {
  // trim
  if (
    bytool.trim("   by tool  ") != "bytool" ||
    bytool.trim("   by tool  ", 1) != "bytool" ||
    bytool.trim("   by tool  ", 2) != "by tool" ||
    bytool.trim("   by tool  ", 3) != "by tool  " ||
    bytool.trim("   by tool  ", 4) != "   by tool"
  ) {
    console.error("error");
    return;
  }
  // changeCase
  if (
    bytool.changeCase("byTool", 1) != "Bytool" ||
    bytool.changeCase("byTool", 2) != "bYTOOL" ||
    bytool.changeCase("byTool", 3) != "BYtOOL" ||
    bytool.changeCase("byTool", 4) != "BYTOOL" ||
    bytool.changeCase("byTool", 5) != "bytool"
  ) {
    console.error("error");
    return;
  }
  // repeatStr
  if (
    bytool.repeatStr("bytool") != "bytoolbytoolbytool" ||
    bytool.repeatStr("bytool", 2) != "bytoolbytool"
  ) {
    console.error("error");
    return;
  }
  // replaceAll
  if (bytool.replaceAll("前端工具包（aaa）", "aaa", "bytool") != "前端工具包（bytool）") {
    console.error("error");
    return;
  }
  // replaceStr
  if (
    bytool.replaceStr('1asd88465asdwqe3', [5], 1) != "1asd88465as*****" ||
    bytool.replaceStr('1asd88465asdwqe3', [5], 1, '+') != "1asd88465as+++++"
  ) {
    console.error("error");
    return;
  }
  // checkStringType
  if (
    !bytool.checkStringType("xc@bytool.cn", "email") ||
    !bytool.checkStringType("18211111111", "phone") ||
    !bytool.checkStringType("18211111111", "phone") ||
    !bytool.checkStringType("023-11111111", "tel") ||
    !bytool.checkStringType(1, "number") || 
    !bytool.checkStringType("good", "english") ||
    !bytool.checkStringType("18211111111", "phone") ||
    !bytool.checkStringType("前端工具包", "chinese") ||
    !bytool.checkStringType("aaa", "lower") ||
    !bytool.checkStringType("AAA", "upper")
  ) {
    console.error("error");
    return;
  }
  // checkPwdStrength
  if (bytool.checkPwdStrength("A@123aaa") != 4) {
    console.error("error");
    return;
  }
  // filterStr
  if (bytool.filterStr('asd#%^*^&*^%^&*$#@!()*-())_{}<div></div><img src=""/>', 'html,WORD,chinese,special', '*', '%?') != '*asd#%^*^&*^%^&*$#@!()*-())_{}***') {
    console.error("error");
    return;
  }
  // stringToBase32
  if (bytool.stringToBase32('前端工具包（bytool）') != '4WEY3Z5LV7S3PJPFQW36LDEF566IQYTZORXW63HPXSEQ====') {
    console.error("error");
    return;
  }
  // stringToBase64
  if (bytool.stringToBase64('前端工具包（bytool）') != '5YmN56uv5bel5YW35YyF77yIYnl0b29s77yJ') {
    console.error("error");
    return;
  }
  // randomWord
  if (!bytool.randomWord(30)) {
    console.error("error");
    return;
  }
  // countStr
  if (bytool.countStr('fsafsafsa6534bytoolsklaajf6bytool75bytool67bytoolbytool$%^$fsdbytoolafsa', 'bytool') != 6) {
    console.error("error");
    return;
  }
  // formatText
  if (bytool.formatText('1asd88465asdwqe3', 4, '-') != '1asd-8846-5asd-wqe3') {
    console.error("error");
    return;
  }
  // isNotEmpty
  if (
    bytool.isNotEmpty("abc") != true ||
    bytool.isNotEmpty("") != false
  ) {
    console.error("error");
    return;
  }
  // isNotNull
  if (
    !bytool.isNotNull({
      a: 7
    }) ||
    bytool.isNotNull({}) != false
  ) {
    console.error("error");
    return;
  }
  // isKeyInObj
  if (
    !bytool.isKeyInObj("abc", {
      abc: "77"
    })
  ) {
    console.error("error");
    return;
  }
  // getValueByKey
  if (
    bytool.getValueByKey("abc", {
      abc: "77"
    }) != '77' ||
    bytool.getValueByKey("abcd", {
      abc: "77"
    }, "not result") != 'not result'
  ) {
    console.error("error");
    return;
  }

  console.log("字符串所有方法检测通过")
}