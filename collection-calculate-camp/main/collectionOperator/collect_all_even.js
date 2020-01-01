'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var lens = collection.length;
  var result = [];
  if (!lens) {
    return result;
  }


  for (var i = 0; i < lens; i++) {
    if ((collection[i] & 1) === 0) {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = collect_all_even;
