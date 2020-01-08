'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  if (!collection_a.length || !collection_b.length) {
    return;
  }

  let aSet = new Set(collection_a);
  return Array.from(new Set(collection_b.filter(item => aSet.has(item))));
}

module.exports = get_intersection;
