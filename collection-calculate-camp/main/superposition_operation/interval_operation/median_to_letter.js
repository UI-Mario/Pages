'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var median = getMedian(collection);
  return numberToStr(median);
}

function getMedian(arr) {
  var lens = arr.length;
  var middle = Math.floor(lens / 2); 
  if (!(lens & 1)) {
    return Math.ceil((arr[middle] + arr[middle -1]) / 2);
  } else {
    return arr[middle];
  }
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

module.exports = median_to_letter;
