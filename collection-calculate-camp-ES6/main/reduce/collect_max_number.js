'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  if (!collection.length) {
    return;
  }
  let result = collection.reduce((pre, cur) => {
    return pre < cur ? cur : pre;
  }, collection[0])

  return result;
}

module.exports = collect_max_number;
