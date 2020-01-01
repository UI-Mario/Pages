'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum = 0;
  for (var i = 0, lens = collection.length; i < lens; i++) {
    sum += collection[i];
  }
  return sum;
}

module.exports = calculate_elements_sum;

