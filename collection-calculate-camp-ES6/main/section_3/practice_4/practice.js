let count_same_elements = require('../../section_2/practice_2/practice.js');
let myFunc = require('../practice_2/practice.js');
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collection_c = count_same_elements(collection_a);
  return myFunc(collection_c, object_b);
}

module.exports = create_updated_collection;
