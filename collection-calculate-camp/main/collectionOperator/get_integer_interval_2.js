'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var temp = number_a;
  if (temp < number_b) {
    while (temp !== number_b) {
      if (!(temp & 1)) {
        result.push(temp);
      }
      temp++;
    }
  } else if (temp > number_b) {
    while (temp !== number_b) {
      if (!(temp & 1)) {
        result.push(temp);
      }
      temp--;
    }
  }

  if (!(temp & 1)) {
    result.push(temp);
  } 
  return result;
}

module.exports = get_integer_interval_2;
