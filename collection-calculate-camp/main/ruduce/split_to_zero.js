'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  result.push(number);
  if (interval === 0.2) {
    while (number !== 0) {
      number -= interval;
      number = Math.round(number * 100) / 100;
      result.push(number);
    }
  } else if (interval === 0.3) {
    while (number > 0) {
      number -= interval;
      number = Math.round(number * 100) / 100;
      result.push(number);
    }
  }
  return result;
}


module.exports = spilt_to_zero;
