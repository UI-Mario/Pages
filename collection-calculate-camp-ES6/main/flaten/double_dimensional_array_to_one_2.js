'use strict';
let myFunc = require('../src/lib.js');
function double_to_one(collection) {

  //在这里写入代码
  let arr = myFunc.double_to_one(collection);
  return Array.from(new Set(arr));
}

module.exports = double_to_one;
