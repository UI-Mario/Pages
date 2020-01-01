'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var lens = collection.length;
  for (var i = lens - 1; i >= 0; i--) {
    if (!(collection[i] & 1)) {
      return collection[i];
    }
  }
}

module.exports = find_last_even;
