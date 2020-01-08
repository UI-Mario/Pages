'use strict';
var rank_desc = function (collection) {
  return collection.sort(descSort);
}

function descSort(a, b) {
  return a - b;
}
module.exports = rank_desc;
