'use strict';
let getMedian = require('../../../reduce/compute_median.js');
var calculate_median = function (collection) {
  let collection_a = collection.filter((item, index) => index % 2)
  return getMedian(collection_a);
}

module.exports = calculate_median;
