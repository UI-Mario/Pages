function count_same_elements(collection) {
  //在这里写入代码
  var set = choose_no_repeat_element(collection);
  var result = getCount(set, collection);
  return result;
}

function choose_no_repeat_element(collection) {
  var set = [];
  for (var i = 0, lens = collection.length; i < lens; i++) {
    var strLens = collection[i].length;
    if (strLens > 1) {
      var obj = strToObj(collection[i], strLens);
      collection[i] = obj;
      if (!isFind(obj.name, set)) {
        set.push(obj.name);
      }
    } else {
      if (!isFind(collection[i], set)) {
        set.push(collection[i]);
      }
    }
  }
  return set;
}

function isFind(element, set) {
  var lens = set.length;
  var flag = false;
  for (var j = 0; j < lens; j++) {
    if (element === set[j]) {
      flag = true;
      break;
    }
  }
  return flag;
}

function strToObj(str, n) {
  var obj = {
    name: "",
    count: ""
  }
  for (var j = 0; j < n; j++) {
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

function getCount(set, collection) {
  var result = [];
  for (var i = 0, lens = set.length; i < lens; i++) {
    var obj = {
      name: set[i],
      summary: 0,
    }
    for (var j = 0, collectionLens = collection.length; j < collectionLens; j++) {
      if (typeof(collection[j]) === "object") {
        if (collection[j].name === set[i]) {
          obj.summary += collection[j].count;
        }
      } else {
        if (collection[j] === set[i]) {
          obj.summary++;
        }
      }
    }
    result.push(obj);
  }
  return result;
}


module.exports = count_same_elements;
