function bestCharge(selectedItems) {
  let getSelectedInfo = selectedItems => {
    let selectedId = [];
    for (let i in selectedItems) {
      selectedId.push(selectedItems[i].slice(0, 8));
    }
  
    let selectedObj = idToItems(selectedId);
    for (let i in selectedObj) {
      let itemsArr = selectedItems[i].split(' ');
      let count = Number(itemsArr[itemsArr.length - 1]);
      selectedObj[i].count = count;
      selectedObj[i].id = selectedId[i];
    }
    return selectedObj;
  }
  
  let idToItems = arr => {
    let items = loadAllItems();
    let idToItems = [];
    for (let i in arr) {
      for (let j in items) {
        if (arr[i] === items[j].id) {
          let item = {};
          item.name = items[j].name;
          item.price = items[j].price;
          idToItems.push(item);
        }
      }
    }
    return idToItems;
  }
  
  let selectedObj = getSelectedInfo(selectedItems);

  let sum = 0;

  for (let i in selectedObj) {
    sum += selectedObj[i].price * selectedObj[i].count;
  }

  let thirtyMinusSix = sum => {
    let sumActuall;
    if(sum >= 30) {
      sumActuall = sum - 6;
    }
    if (sum < 30) {
      sumActuall = sum;
    }
    return sumActuall;
  }

  let halfPrice = selectedObj => {
    let sumActuall = 0;
    let promotions = loadPromotions();
    for (let i in selectedObj) {
      sumActuall += selectedObj[i].price * selectedObj[i].count;
      for (let j in promotions[1].items) {
        if (selectedObj[i].id === promotions[1].items[j]) {
          sumActuall -= (selectedObj[i].price * selectedObj[i].count)/2;
        }
      }
    }
    return sumActuall;
  }
  
  let whichMeans = (sum, selectedObj) => {
    let methodOne = thirtyMinusSix(sum);
    let methodTwo = halfPrice(selectedObj);
    let method;
    if (methodOne <= methodTwo && methodOne !==sum) {
      method = 1;
    }
    if (methodOne > methodTwo && methodTwo !==sum) {
      method = 2;
    }
    if (methodOne === sum && methodTwo === sum && sum !== 0) {
      method = 3;
    }

    return method;
  }
 
  let showContent = (selectedObj) => {
    let contentTotalPrice = (selectedObj, content) => {
      if (selectedObj.length !== 0) {
        for (let i in selectedItems) {
          content += `
${selectedObj[i].name} x ${selectedObj[i].count} = ${selectedObj[i].price * selectedObj[i].count}元`;
        }
        content += `
-----------------------------------`;
      }
      return content;
    }
  
    let showPromotionMeans = (means, content) => {
      if (means === 1) {
        content += `
使用优惠:
满30减6元，省6元
-----------------------------------
总计：${thirtyMinusSix(sum)}元
===================================`;
      }
    
      if (means === 2) {
        content += `
使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省${sum - halfPrice(selectedObj)}元
-----------------------------------
总计：${halfPrice(selectedObj)}元
===================================`;
      }
    
      if (means === 3) {
        content += `
总计：${sum}元
===================================`;
      }
    
      return content;
    }

    let content = `
============= 订餐明细 =============`;

    content = contentTotalPrice(selectedObj, content);

    let means = whichMeans(sum, selectedObj);
    content = showPromotionMeans (means, content);
    return content;
  }

  return showContent(selectedObj);
}