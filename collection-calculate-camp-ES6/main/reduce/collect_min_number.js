'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  if (!collection.length) {
    return;
  }

  let result = collection.reduce((pre, cur) => {
    return pre < cur ? pre : cur;
  }, collection[0])

  return result;
}

module.exports = collect_min_number;

