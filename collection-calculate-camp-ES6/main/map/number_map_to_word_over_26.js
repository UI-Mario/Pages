'use strict';
let myFunc = require('../src/lib.js');
var number_map_to_word_over_26 = function (collection) {
  return collection.map(item => myFunc.numToStr(item));
}

module.exports = number_map_to_word_over_26;
