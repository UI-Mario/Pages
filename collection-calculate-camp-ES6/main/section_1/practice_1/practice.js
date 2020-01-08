function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let bSet = new Set(collection_b);
  return Array.from(collection_a.filter(item => bSet.has(item)));
}

module.exports = collect_same_elements;
