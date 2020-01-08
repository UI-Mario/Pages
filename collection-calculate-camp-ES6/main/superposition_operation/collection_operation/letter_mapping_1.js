'use strict';
let myFunc = require('../../src/lib.js');

function even_to_letter(collection) {
  //在这里写入代码
  let collection_c = collection.filter(item => !(item % 2));
  return collection_c.map(item => myFunc.numToStr(item));
}

module.exports = even_to_letter;
