'use strict';
var is_exist_element = function(collection,element){
  var arr = getElementsWithEvenIndices(collection);
  var bool = isFind(arr, element);
  return bool;
};

function getElementsWithEvenIndices(collection) {
  var arr = [];
  for (var i = 0, lens = collection.length; i < lens; i += 2) {
    arr.push(collection[i]);
  }
  return arr;
}

function isFind(collection, element) {
  var bool = false;
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (element === collection[i]) {
      bool = true;
      break;
    }
  }
  return bool;
}

module.exports = is_exist_element;