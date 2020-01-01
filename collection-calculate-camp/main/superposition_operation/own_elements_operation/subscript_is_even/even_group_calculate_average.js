'use strict';
var even_group_calculate_average = function(collection){
  var arrOfEvenNumber = getArrOfEvenNUmberInEvenIndex(collection);
  if (!arrOfEvenNumber.length) {
    return [0];
  }
  var arr = groupingByBit(arrOfEvenNumber);
  var result = getAverageOfPerGroup(arr);
  return result;
};

function getArrOfEvenNUmberInEvenIndex(collection) {
  var arr = [];
  for (var i = 1, lens = collection.length; i < lens; i += 2) {
    if (!(collection[i] & 1))
    arr.push(collection[i]);
  }
  return arr;
}

function groupingByBit(arr) {
  var arrOfADigit = [];
  var arrOfTwoDigit = [];
  var arrOfThreeDigit = [];

  for (var i = 0, lens = arr.length; i < lens; i++) {
    if (arr[i] >= 100 && arr[i] <= 999) {
      arrOfThreeDigit.push(arr[i]);
    } else if (arr[i] >= 10 && arr[i] <= 99) {
      arrOfTwoDigit.push(arr[i]);
    } else if (arr[i] >= 0 && arr[i] <= 9) {
      arrOfADigit.push(arr[i]);
    }
  }
  return [arrOfADigit, arrOfTwoDigit, arrOfThreeDigit];
}

function getAverageOfPerGroup(arr) {
  var result = [];
  for (var i = 0, lens = arr.length; i < lens; i++) {
    if (arr[i].length) {
      var average = getAverage(arr[i]);
      result.push(average);
    }
  }
  return result;
}

function getAverage(arr) {
  var sum = 0;
  var count = 0;
  for (var i = 0, lens = arr.length; i < lens; i++) {
    sum += arr[i];
    count++;
  }
  return sum / count;
}

module.exports = even_group_calculate_average;
