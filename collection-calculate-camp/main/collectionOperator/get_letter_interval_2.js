'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];

  if (number_a === number_b) {
    var str = getStr(number_a);
    result.push(str);
  } else if (number_a < number_b) {
    var temp = number_a;
    while (temp <= number_b) {
      var str = getStr(temp);
      result.push(str);
      temp++;
    }
  } else {
    var temp = number_a;
    while (temp >= number_b) {
      var str = getStr(temp);
      result.push(str);
      temp--;
    }
  }
  return result;

}

function getStr(num) {
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

module.exports = get_letter_interval_2;

