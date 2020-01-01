'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    var resultLens = result.length;
    var flag = false;
    for (var j = 0; j < resultLens; j++) {
      if (collection[i] === result[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
