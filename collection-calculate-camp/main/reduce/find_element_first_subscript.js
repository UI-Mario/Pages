'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var result = -1;
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (collection[i] === element) {
      result = i;
      break;
    }
  }
  return result;
}

module.exports = calculate_elements_sum;

