'use strict';
var calculate_average = function (collection) {
  let collection_a = collection.filter((item, index) => index % 2 ? true : false)
  let sum = collection_a.reduce((sum, item) => sum += item);
  return sum / collection_a.length;
}

module.exports = calculate_average;
