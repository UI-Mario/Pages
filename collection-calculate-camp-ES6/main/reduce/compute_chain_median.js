'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split("->").map(item => parseInt(item));
  arr.sort((a, b) => a - b);
  let len = arr.length;
  if (!(len % 2)) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  }

  return arr[(len - 1) / 2];
}

module.exports = compute_chain_median;