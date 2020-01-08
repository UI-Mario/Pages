function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  let obj = collection.reduce((pre, item) => {
    (item in pre) ? pre[item]++ : pre[item] = 1;
    return pre;
  }, {})

  for (let i in obj) {
    let o = {};
    o.key = i;
    o.count = obj[i];
    result.push(o);
  }

  return result;
}

module.exports = count_same_elements;