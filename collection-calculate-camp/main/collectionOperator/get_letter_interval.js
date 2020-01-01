'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
    if (number_a === number_b) {
      var str = numberToAcode(number_a);
      result.push(str);
    } else if (number_a < number_b) {
      while (number_a <= number_b) {
        var str = numberToAcode(number_a);
        result.push(str);
        number_a++;
      }
    } else {
      while (number_a >= number_b) {
        var str = numberToAcode(number_a);
        result.push(str);
        number_a--;
      }
    }
 
  return result;
}

function numberToAcode(num) {
  return String.fromCharCode(num + 96);
}

module.exports = get_letter_interval;
