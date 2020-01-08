'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  if (!collection_a.length || !collection_b.length) {
    return;
  }
  return collection_a.filter(item => {
    for (let i of collection_b) {
      if (!(item % i)) {
        return true;
      }
    }
    return false;
  });
}

module.exports = choose_divisible_integer;