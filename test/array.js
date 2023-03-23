test();
function test() {
  // removeRepeatArr
  if (bytool.removeRepeatArr(['b', 'y', 't', 'o', 'o', 'l']).join() != ['b', 'y', 't', 'o', 'l'].join()) {
    console.error("error");
    return;
  }
  // upsetArr
  if (!bytool.upsetArr([1, 2, 5, 'aaa', 4, 'bbbb', 'aaa', 1, 5])) {
    console.error("error");
    return;
  }
  // getCount
  if (
    bytool.getCount([1, 2, 3, 1, 2, 5, 2, 4, 1, 2, 6, 2, 1, 3, 2]).join() != [{ "el": "2", "count": 6 }, { "el": "1", "count": 4 }, { "el": "3", "count": 2 }, { "el": "4", "count": 1 }, { "el": "5", "count": 1 }, { "el": "6", "count": 1 }].join() ||
    bytool.getCount([1, 2, 3, 1, 2, 5, 2, 4, 1, 2, 6, 2, 1, 3, 2], 3).join() != [{ "el": "2", "count": 6 }, { "el": "1", "count": 4 }, { "el": "3", "count": 2 }].join() ||
    bytool.getCount([1, 2, 3, 1, 2, 5, 2, 4, 1, 2, 6, 2, 1, 3, 2], null, 1).join() != [{ "el": "6", "count": 1 }, { "el": "5", "count": 1 }, { "el": "4", "count": 1 }, { "el": "3", "count": 2 }, { "el": "1", "count": 4 }, { "el": "2", "count": 6 }].join() ||
    bytool.getCount([1, 2, 3, 1, 2, 5, 2, 4, 1, 2, 6, 2, 1, 3, 2], 3, 1).join() != [{ "el": "6", "count": 1 }, { "el": "5", "count": 1 }, { "el": "4", "count": 1 }].join()
  ) {
    console.error("error");
    return;
  }
  // maxArr
  if (bytool.maxArr([1, 2, 5, 7, 5]) != 7) {
    console.error("error");
    return;
  }
  // minArr
  if (bytool.minArr([1, 2, 0, -10, 5]) != -10) {
    console.error("error");
    return;
  }
  // sumArr
  if (bytool.sumArr([2, 3, 4, 5, 6, 7]) != 27) {
    console.error("error");
    return;
  }
  // covArr
  if (bytool.covArr([2, 3, 4, 5, 6, 7]) != 4.5) {
    console.error("error");
    return;
  }
  // randomOne
  if (
    !bytool.randomOne([2, 3, 4, 5, 6, 7]) ||
    !bytool.randomOne(['a', 'd', 'r']) ||
    !bytool.randomOne([{ a: 4 }, { b: 6 }, { c: 8 }]) ||
    !bytool.randomOne([['a'], [3, 4, 'b']])
  ) {
    console.error("error");
    return;
  }
  // getEleCount
  if (bytool.getEleCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 900, , 9, 8, 7, 6, 77, 8, 9, 99, 9], 9) != 4) {
    console.error("error");
    return;
  }
  // getArrayNum
  if (bytool.getArrayNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6).join() != [3, 4, 5].join()) {
    console.error("error");
    return;
  }
  // removeArrayForValue
  if (
    bytool.removeArrayForValue(['test', 'test1', 'test2', 'test', 'aaa'], 'test', 0).join() != ['test1', 'test2', 'aaa'].join() ||
    bytool.removeArrayForValue(['test', 'test1', 'test2', 'test', 'aaa'], 'test', 1).join() != ['aaa'].join()
  ) {
    console.error("error");
    return;
  }
  // getOptionArray
  if (bytool.getOptionArray([{ a: 1, b: 2, c: 9 }, { a: 2, b: 3, c: 5 }, { a: 5, b: 9 }, { a: 4, b: 2, c: 5 }, { a: 4, b: 5, c: 7 }], 'b').join() != [2, 3, 9, 2, 5].join()) {
    console.error("error");
    return;
  }
  // arraySort
  if (
    bytool.arraySort([{ a: 1, b: 2, c: 9 }, { a: 2, b: 3, c: 5 }, { a: 5, b: 9 }, { a: 4, b: 2, c: 5 }, { a: 4, b: 5, c: 7 }], 'a, b').join() !=
    [
      { a: 1, b: 2, c: 9 },
      { a: 2, b: 3, c: 5 },
      { a: 4, b: 2, c: 5 },
      { a: 4, b: 5, c: 7 },
      { a: 5, b: 9 }
    ].join()) {
    console.error("error");
    return;
  }
  // arrayEqual
  if (!bytool.arrayEqual([1, 2, 3], [1, 2, 3])) {
    console.error("error");
    return;
  }






  console.log("数组所有方法检测通过")
}