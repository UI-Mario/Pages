'use strict';
let myFunc = require('../../src/lib.js');

function average_to_letter(collection) {

  //在这里写入代码
  let sum = collection.reduce((sum, item) => {
    return sum += item;
  }, 0);
  return myFunc.numToStr(Math.ceil(sum / collection.length));
}

module.exports = average_to_letter;

