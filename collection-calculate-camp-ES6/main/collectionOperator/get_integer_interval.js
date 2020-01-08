'use strict';
let myFunc = require('../src/lib.js');

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let flag = '';
  if (number_a <= number_b) {
    flag = 'increasing';
  } else {
    flag = 'decreasing';
  }

  return myFunc.getArrOfInterval(number_a, number_b, flag);
}

module.exports = get_integer_interval;

