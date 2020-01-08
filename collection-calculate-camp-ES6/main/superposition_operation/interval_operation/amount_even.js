'use strict';

function amount_even(collection) {

  //在这里写入代码
  return collection.reduce((sum, item) => {
    sum += (item % 2 ? 0 : item);
    return sum;
  }, 0);
}

module.exports = amount_even;
