'use strict';
var calculate_average = function(collection){
  var sum = 0;
  var count = 0;
  for (var i = 1, lens = collection.length; i < lens; i += 2) {
      sum += collection[i];
      count++;
  }
  return sum / count;
}

module.exports = calculate_average;
