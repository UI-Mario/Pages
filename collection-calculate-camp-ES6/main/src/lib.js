// return the number in the interval [a, b];
function getArrOfInterval(a, b, flag) {
  let arr = [];
  while (flag === "increasing" && a <= b) {
    arr.push(a++);
  }

  while (flag === "decreasing" && a >= b) {
    arr.push(a--);
  }

  return arr;
}

// number to letter
function numToStr(num) {
  let str = '';
  while (num > 0) {
    let remainder = num % 26;
    let quotient = Math.floor(num / 26);
    if (!remainder) {
      remainder = 26;
      quotient -= 1;
    }
    str = String.fromCharCode(remainder + 96) + str;
    num = quotient;
  }
  return str;
}

function double_to_one(collection) {
  let result = collection.reduce((pre, cur) => {
    typeof (cur) === 'number' ? pre.push(cur) : pre = pre.concat(cur);
    return pre;
  }, [])
  return result;
}

function objToArr(obj) {
  let result = [];
  for (let i in obj) {
    let o = {};
    o.key = i;
    o.count = obj[i];
    result.push(o);
  }

  return result;
}

module.exports.getArrOfInterval = getArrOfInterval;
module.exports.numToStr = numToStr;
module.exports.double_to_one = double_to_one;
module.exports.objToArr = objToArr;