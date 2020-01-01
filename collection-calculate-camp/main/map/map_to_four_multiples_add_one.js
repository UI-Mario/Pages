'use strict';
var map_to_four_multiples_add_one = function(collection){
  for (var i = 0, lens = collection.length; i < lens; i++) {
    collection[i] = collection[i] * 4 + 1;
  }
  return collection;
};

module.exports = map_to_four_multiples_add_one;
