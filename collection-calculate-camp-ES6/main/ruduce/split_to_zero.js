'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let bitsOfNumber = number.toString().split('.')[1] ? number.toString().split('.')[1].length : 0;
  let bitsOfInterval = interval.toString().split('.')[1] ? interval.toString().split('.')[1].length : 0;
  let base = Math.pow(10, Math.max(bitsOfInterval, bitsOfNumber));
  let result = [];
  while (number > -interval) {
    result.push(number);
    number = (number * base - interval * base) / base;
  }

  return result;
}


module.exports = spilt_to_zero;
