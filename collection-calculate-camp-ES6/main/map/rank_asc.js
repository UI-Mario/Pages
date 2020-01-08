'use strict';
var rank_asc = function (collection) {
  return collection.sort(ascSort);
}

function ascSort(a, b) {
  return b - a;
}
module.exports = rank_asc;
