function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var i = 0, lens = collection_a.length; i < lens; i++) {
    if (isFind(collection_a[i].key, object_b.value)) {
      collection_a[i].count--;
    }
  }
  return collection_a;
}

function isFind(element, collection) {
  var lens = collection.length;
  var bool = false;
  for (var j = 0; j < lens; j++) {
    if (element === collection[j]) {
      bool = true;
      break;
    }
  }
  return bool;
}

module.exports = create_updated_collection;
