'use strict';
let getMedian = require('../../reduce/compute_median.js');
let myFunc = require('../../src/lib.js');

function median_to_letter(collection) {

  //在这里写入代码
  var median = Math.ceil(getMedian(collection));
  return myFunc.numToStr(median);
}

module.exports = median_to_letter;
