'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var result = 100000;
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (collection[i] < result) {
      result = collection[i];
    }
  }
  return result;
}

module.exports = collect_min_number;

