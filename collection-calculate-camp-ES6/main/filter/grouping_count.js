'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let result = collection.reduce((pre, cur) => {
    (cur in pre) ? pre[cur]++ : pre[cur] = 1;
    return pre;
  }, {})
  return result;
}

module.exports = grouping_count;