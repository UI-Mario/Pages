'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var lens = collection.length;
  var sum = getSum(collection, lens);
  var average = Math.ceil(sum / lens);
  return numberToStr(average);
}

function getSum(collection, lens) {
  var sum = 0;
  for (var i = 0; i < lens; i++) {
    sum += collection[i];
  }
  return sum;
}

function numberToStr(num) {
  var table = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
    var str = "";
    var result = "";
  while (num) {
    var remainder = num % 26;
    var num = Math.floor(num / 26);
    if (!remainder) {
      remainder = 26;
      num = num - 1;
    }
    str += table[remainder];
  }

  for (var i = str.length-1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = average_to_letter;

