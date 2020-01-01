'use strict';

function compute_median(collection) {
  //在这里写入代码
  var arr = insertionSort(collection);
  var lens = arr.length;
  var middle = Math.floor(lens / 2); 
  if (!(lens & 1)) {
    return (arr[middle] + arr[middle -1]) / 2;
  } else {
    return arr[middle];
  }
}

function insertionSort(collection) {
  for (var i = 1, lens = collection.length; i < lens; i++) {
    var key = collection[i];
    var j = i - 1;
    while (j >= 0 && collection[j] < key) {
      collection[j+1] = collection[j];
      j--;
    }
    collection[j+1] = key;
  }
  return collection;
}

module.exports = compute_median;


