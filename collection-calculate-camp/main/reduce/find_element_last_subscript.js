'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var result = -1;
  var lens = collection.length;
  for (var i = lens - 1; i > -1; i--) {
    if (collection[i] === element) {
      result = i;
      break;
    }
  }
  return result;
}

module.exports = calculate_elements_sum;
