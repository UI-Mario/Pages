'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var lensA = collection_a.length;
  var lensB = collection_b.length;
  var result = [];
  if (lensA === 0 || lensB === 0) {
    return result;
  }

  for (var i = 0; i < lensB; i++) {
    for (var j = 0; j < lensA; j++) {
      if (collection_a[j] === collection_b[i]) {
        result.push(collection_b[i]);
      }
    }
  }

  return result;
}

module.exports = get_intersection;
