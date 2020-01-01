'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_a === number_b) {
    result.push(number_a);
  } else if (number_a < number_b) {
    while (number_a <= number_b) {
      result.push(number_a);
      number_a++;
    }
  } else {
    while (number_a >= number_b) {
      result.push(number_a);
      number_a--;
    }
  }
  return result;
}

module.exports = get_integer_interval;

