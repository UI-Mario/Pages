'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  if (!collection.length) {
    return;
  }
  return collection.filter(item => !(item % 3));
}

module.exports = choose_multiples_of_three;
