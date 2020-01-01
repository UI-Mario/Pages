'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (!(collection[i] & 1)) {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_even;
