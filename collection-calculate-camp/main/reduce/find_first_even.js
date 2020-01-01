'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var lens = collection.length;
  for (var i = 0; i < lens; i++) {
    if (!(collection[i] & 1)) {
      return collection[i];
    }
  }
}

module.exports = find_first_even;

