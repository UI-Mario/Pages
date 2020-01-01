'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    if (!(collection[i] & 1)) {
      result.push(numberToStr(collection[i]));
    }
  }
  return result;
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
};

module.exports = even_to_letter;
