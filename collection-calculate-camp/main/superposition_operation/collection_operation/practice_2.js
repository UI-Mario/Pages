'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if ((collection[i] & 1)) {
      result.push(collection[i] * 3 + 2);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

