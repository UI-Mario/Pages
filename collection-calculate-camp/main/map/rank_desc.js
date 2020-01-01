'use strict';
var rank_desc = function(collection){
  for (var i = 1, lens = collection.length; i < lens; i++) {
    var key = collection[i];
    var j = i - 1;
    while (j >= 0 && collection[j] > key) {
      collection[j+1] = collection[j];
      j--;
    }
    collection[j+1] = key;
  }
  return collection;
};

module.exports = rank_desc;
