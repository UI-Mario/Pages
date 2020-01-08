'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  if (!collection.length) {
    return;
  }
  return collection.pop();
}

module.exports = collect_last_element;
