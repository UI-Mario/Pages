'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (var i = 0, Blens = collection_b.length; i < Blens; i++) {
    var flag = false;
    for (var j = 0, Alens = collection_a.length; j < Alens; j++) {
      if (collection_a[j] === collection_b[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      collection_a.push(collection_b[i]);
    }
  }
  return collection_a;
}

module.exports = get_union;

