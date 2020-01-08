'use strict';
function rank_by_two_large_one_small(collection){
  collection = collection.sort(compare);
  for (var i = 0, lens = collection.length; i + 3 < lens; i += 3) {
    var temp = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = temp;
  }
  return collection;
}

function compare(a, b) {
  return a - b;
}

module.exports = rank_by_two_large_one_small;
