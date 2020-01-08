
let myFunc = require('../../src/lib.js');

function count_same_elements(collection) {
  //在这里写入代码
  let arr = collection.map(item => {
    return item.length > 1 ? strToObj(item) : item;
  });

  let obj = arr.reduce((obj, item) => {
    if (typeof (item) === 'object') {
      item.name in obj ? obj[item.name] += item.count : obj[item.name] = item.count;
    } else {
      item in obj ? obj[item]++ : obj[item] = 1;
    }
    return obj;
  }, {})

  return myFunc.objToArr(obj);
}

function strToObj(str) {
  let n = str.length;
  let obj = {
    name: "",
    count: ""
  }
  for (let j = 0; j < n; j++) {
    if (str[j].charCodeAt() >= 97 && str[j].charCodeAt() <= 122
      || str[j].charCodeAt() >= 65 && str[j].charCodeAt() <= 90) {
      obj.name += str[j];
    }
    if (str[j].charCodeAt() >= 48 && str[j].charCodeAt() <= 57) {
      obj.count += str[j];
    }
  }
  obj.count = parseInt(obj.count);
  return obj;
}

module.exports = count_same_elements;