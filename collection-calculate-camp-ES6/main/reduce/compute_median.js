'use strict';

function compute_median(collection) {
  //在这里写入代码
  let len = collection.length;
  if (!len) {
    return;
  }

  collection.sort((a, b) => a - b);
  if (!(len % 2)) {
    return (collection[len / 2 - 1] + collection[len / 2]) / 2;
  }

  return collection[(len - 1) / 2];
}

module.exports = compute_median;


