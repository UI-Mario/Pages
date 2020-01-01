'use strict';
var single_element = function(collection){
  var arr = getElementsWithEven(collection);
  var set = getNoRepeatElement(arr);
  var result = getSingleElement(set, arr);
  return result;
};

function getElementsWithEven(collection) {
  var arr = [];
  for (var i = 1, lens = collection.length; i < lens; i += 2) {
    arr.push(collection[i]);
  }
  return arr;
}

function getNoRepeatElement(arr) {
  var result = [];
  for (var i = 0, lens = arr.length; i < lens; i++) {
    var flag = false;
    for (var j = i + 1; j < lens; j++) {
      if (arr[i] === arr[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(arr[i]);
    }
  }
  return result;
}

function getSingleElement(set, arr) {
  var result = [];
  for (var i = 0, lens = set.length; i < lens; i++) {
    var count = 0;
    for (var j = 0, lensOfArr = arr.length; j < lensOfArr; j++) {
      if (set[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(set[i]);
    }
  }
  return result;
}

module.exports = single_element;
