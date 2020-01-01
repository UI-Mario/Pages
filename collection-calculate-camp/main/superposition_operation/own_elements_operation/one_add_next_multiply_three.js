'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for (var i = 0, lens = collection.length; i < lens - 1; i++) {
    result.push((collection[i] + collection[i+1]) * 3);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
