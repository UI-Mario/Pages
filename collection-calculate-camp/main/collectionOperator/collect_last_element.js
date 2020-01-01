'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var lens = collection.length;
  if (!lens) {
    return;
  } 
  var result = collection.pop();
  return result;
}

module.exports = collect_last_element;
