function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  var lensA = collection_a.length;
  var lensB = collection_b.length;
  for (var i = 0; i < lensA; i++) {
    for (var j = 0; j < lensB; j++) {
      for (var k = 0, childLens = collection_b[j].length; k < childLens; k++)
      if (collection_a[i] === collection_b[j][k]) {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
