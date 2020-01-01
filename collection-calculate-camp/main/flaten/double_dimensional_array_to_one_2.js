'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (typeof (collection[i]) !== 'number') {
      for (var j = 0, arrLens = collection[i].length; j < arrLens; j++) {
        if (isUnique(collection[i][j], result)) {
          result.push(collection[i][j]);
        }
      }
    } else {
      if (isUnique(collection[i], result)) {
        result.push(collection[i]);
      }
    }
  }
  return result;
}

function isUnique(num, result) {
  var bool = true;
  for (var i = 0, lens = result.length; i < lens; i++) {
    if (num === result[i]) {
      bool = false;
    }
  }
  return bool;
}

module.exports = double_to_one;

// console.log(double_to_one([[1, 2, 3], [5, 2, 1, 4], [2, 1]]));
