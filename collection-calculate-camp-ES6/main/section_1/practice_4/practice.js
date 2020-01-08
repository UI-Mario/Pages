function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let bSet = new Set(object_b.value);
  return collection_a.reduce((result, item) => {
    if (bSet.has(item.key)) {
      result.push(item.key);
    }
    return result;
  }, [])
}

module.exports = collect_same_elements;
