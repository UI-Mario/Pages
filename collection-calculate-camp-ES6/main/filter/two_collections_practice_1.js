'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  if (!collection_a.length || !collection_b.length) {
    return;
  }

  let bSet = new Set(collection_b);
  return collection_a.filter(item => bSet.has(item));
}

module.exports = choose_common_elements;
