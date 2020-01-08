'use strict';
var single_element = function (collection) {
  let arrAtOdd = collection.filter((item, index) => index % 2);
  let set = Array.from(new Set(arrAtOdd));
  return getSingleElement(set, arrAtOdd);
}

function getSingleElement(set, arr) {
  let result = [];
  for (let i = 0, lens = set.length; i < lens; i++) {
    let count = 0;
    for (let j = 0, lensOfArr = arr.length; j < lensOfArr; j++) {
      if (set[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(set[i]);
    }
  }
  return result;
}

module.exports = single_element;