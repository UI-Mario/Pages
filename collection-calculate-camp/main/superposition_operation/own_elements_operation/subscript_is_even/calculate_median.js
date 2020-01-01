'use strict';
var calculate_median = function(collection){
  var arr = [];
  for (var i = 1, lens = collection.length; i < lens; i += 2) {
    arr.push(collection[i]);
  }
  return getMedian(arr);
};

function getMedian(arr) {
  var lens = arr.length;
  var middle = Math.floor(lens / 2); 
  if (!(lens & 1)) {
    return Math.ceil((arr[middle] + arr[middle -1]) / 2);
  } else {
    return arr[middle];
  }
}

module.exports = calculate_median;
