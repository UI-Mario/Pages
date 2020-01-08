'use strict';
var even_group_calculate_average = function (collection) {
  if (!collection.length) {
    return;
  }

  let arrEven = collection.filter((item, index) => {
    if (index % 2) {
      return item % 2 ? false : true;
    }
    return false;
  });

  if (!arrEven.length) {
    return [0];
  }

  let groupResult = groupByBits(arrEven);
  return getAverageOfgroups(groupResult);
}

function groupByBits(arr) {
  arr.sort((a, b) => a - b);
  let result = {};
  for (let i of arr) {
    i.toString().length in result ? result[i.toString().length].push(i) : result[i.toString().length] = [i];
  }
  return result;
}

function getAverageOfgroups(objs) {
  let result = [];
  for (let element in objs) {
    let sum = objs[element].reduce((sum, item) => sum += item, 0);
    result.push(sum / objs[element].length);
  }
  return result;
}

module.exports = even_group_calculate_average;
