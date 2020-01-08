'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let collection_odd = collection.filter(item => item % 2);
  let sum = collection_odd.reduce((sum, item) => sum += item, 0);
  return sum / collection_odd.length;
}

module.exports = average_uneven;
