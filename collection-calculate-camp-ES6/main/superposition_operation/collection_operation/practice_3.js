'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.reduce((sum, item) => {
    sum += (item % 2 ? item * 3 + 5 : 0);
    return sum;
  }, 0)
}

module.exports = hybrid_operation_to_uneven;

