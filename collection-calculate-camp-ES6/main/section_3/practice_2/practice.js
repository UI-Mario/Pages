function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let bSet = new Set(object_b.value);
  return collection_a.map(item => {
    bSet.has(item.key) ? item.count -= parseInt(item.count / 3) : item.count;
    return item;
  })
}

module.exports = create_updated_collection;
