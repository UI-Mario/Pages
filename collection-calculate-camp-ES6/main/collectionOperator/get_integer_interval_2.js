'use strict';
let myFunc = require('../src/lib.js');

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let arr = [];
  if (number_a <= number_b) {
    arr = myFunc.getArrOfInterval(number_a, number_b, "increasing");
  } else {
    arr = myFunc.getArrOfInterval(number_a, number_b, "decreasing");
  }

  return arr.filter(item => (!(item % 2)));
}

module.exports = get_integer_interval_2;