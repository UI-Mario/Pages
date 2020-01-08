'use strict';
let myFunc = require('../src/lib.js')

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let flag = "decreasing";
  let result = [];
  if (number_a <= number_b) {
    flag = "increasing";
  }

  let arr = myFunc.getArrOfInterval(number_a, number_b, flag);
  arr.forEach(item => result.push(myFunc.numToStr(item)));
  return result;
}

module.exports = get_letter_interval;
