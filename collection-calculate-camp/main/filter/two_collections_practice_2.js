'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var lensA = collection_a.length;
  var lensB = collection_b.length;
  for (var i = 0; i < lensA; i++) {
    var flag = false;
    for (var j = 0; j < lensB; j++) {
      if (collection_b[j] === collection_a[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(collection_a[i]);
    }
  }
  return result;
}

module.exports = choose_no_common_elements;
