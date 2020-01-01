'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var bool = true;
  collection_a = insertionSort(collection_a);
  collection_b = insertionSort(collection_b);
  for (var i = 0, lens = collection_a.length; i < lens; i++) {
    if (collection_a[i] !== collection_b[i]) {
      bool = false;
      break;
    }
  }
  return bool;
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

module.exports = compare_collections;


