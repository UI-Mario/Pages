'use strict';
var even_asc_odd_desc = function (collection) {
  let odd = collection.filter(item => item % 2);
  let even = collection.filter(item => !(item % 2));
  let result = even.sort((a, b) => a - b).concat(odd.sort((a, b) => b - a));
  return result;
}

module.exports = even_asc_odd_desc;
