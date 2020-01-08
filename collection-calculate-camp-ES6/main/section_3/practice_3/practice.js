let myFunc = require('../../section_2/practice_1/practice.js');
let updated = require('../practice_2/practice.js')
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = myFunc(collection_a);
  return updated(collection_c, object_b);
}

module.exports = create_updated_collection;
