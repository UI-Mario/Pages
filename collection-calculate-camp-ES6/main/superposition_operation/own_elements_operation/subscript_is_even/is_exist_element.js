'use strict';
var is_exist_element = function (collection, element) {
  return collection.reduce((bool, item, index) => {
    if (item === element && !bool) {
      bool = index % 2 ? false : true;
    }
    return bool;
  }, false)
}

module.exports = is_exist_element;