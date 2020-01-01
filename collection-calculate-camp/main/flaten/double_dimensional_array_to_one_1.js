'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (typeof (collection[i]) !== 'number') {
      for (var j = 0, arrLens = collection[i].length; j < arrLens; j++) {
        result.push(collection[i][j]);
      }
    }
    else {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
