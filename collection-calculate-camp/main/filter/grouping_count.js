'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var uniqueCollection = choose_no_repeat_number(collection);
  var result = getCount(uniqueCollection, collection);
  return result;
}

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    var resultLens = result.length;
    var flag = false;
    for (var j = 0; j < resultLens; j++) {
      if (collection[i] === result[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(collection[i]);
    }
  }
  return result;
}

function getCount(uniqueCollection, collection) {
  var result = {};
  for (var i = 0, lens = uniqueCollection.length; i < lens; i++) {
    var count = 0;
    for (var j = 0, collectionLens = collection.length; j < collectionLens; j++) {
      if (collection[j] === uniqueCollection[i]) {
        count++;
      }
    }
    result['' + uniqueCollection[i]] = count;
  }
  return result;
}

module.exports = grouping_count;
