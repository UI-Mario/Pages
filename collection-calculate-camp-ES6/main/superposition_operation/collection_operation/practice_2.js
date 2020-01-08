'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.reduce((pre, item) => {
    item % 2 ? pre.push(item * 3 + 2) : pre;
    return pre;
  }, [])
}

module.exports = hybrid_operation_to_uneven;

