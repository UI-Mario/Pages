'use strict';
var even_asc_odd_desc = function(collection){
  var group = getGroupByOddAndEven(collection);
  var result = getArrOfEvenAscOddDesc(group[0], group[1]);
  return result;
};

function getGroupByOddAndEven(collection) {
  var arrOfeven = [];
  var arrOfOdd = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (!(collection[i] & 1)) {
      arrOfeven.push(collection[i]);
    } else {
      arrOfOdd.push(collection[i]);
    }
  }
  return [arrOfOdd, arrOfeven];
}

function getArrOfEvenAscOddDesc(arrOfOdd, arrOfeven) {
  var evenAsc = arrOfeven.sort(compareNumberOfEven);
  var oddDesc = arrOfOdd.sort(compareNumberOfOdd);
  for (var i = 0, lens = oddDesc.length; i < lens; i++) {
    evenAsc.push(oddDesc[i]);
  }
  return evenAsc;
}

function compareNumberOfEven(a, b) {
  return a - b;
}

function compareNumberOfOdd(a, b) {
  return b - a;
}

module.exports = even_asc_odd_desc;
