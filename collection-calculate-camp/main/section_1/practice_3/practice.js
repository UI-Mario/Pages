function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var lensA = collection_a.length;
  for (var i = 0; i < lensA; i++) {
    for (var j = 0, lens = object_b.value.length; j < lens; j++) {
      if (collection_a[i] === object_b.value[j]) {
        result.push(collection_a[i]);
      }
    }
  }
 return result;   
}

module.exports = collect_same_elements;
