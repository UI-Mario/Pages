'use strict';

function compute_average(collection) {
  //在这里写入代码
  var lens = collection.length;
  var sum = getSum(collection, lens);
  var average = sum / lens;
  return average;
}

function getSum(arr, n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}

module.exports = compute_average;

