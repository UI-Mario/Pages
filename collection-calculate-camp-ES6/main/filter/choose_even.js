'use strict';

function choose_even(collection) {
  //在这里写入代码
  if (!collection.length) {
    return;
  }
  return collection.filter(item => !(item % 2));
}

module.exports = choose_even;
