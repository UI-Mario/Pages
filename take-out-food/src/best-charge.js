 
function bestCharge(selectedItems) {
  let selectedItemsInfo = getCartItemsInfo(selectedItems);
  let promotionInfo = calcuBetterPromotion(selectedItemsInfo);
  let charge = calcuAllMoney(selectedItemsInfo, promotionInfo);
  let chargeInfo = printReceipt(selectedItemsInfo, promotionInfo, charge);
  return chargeInfo;
}

console.log(bestCharge(["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]));

function getCartItemsInfo(selectedItems) {
  let basicItemsInfo = getBasicItemsInfo(selectedItems);
  let cartsItemInfo = calcuCharge(basicItemsInfo);
  return cartsItemInfo;
}

function getBasicItemsInfo(selectedItems) {
  let basicItemsInfo = [];
  let allItems = loadAllItems();

  selectedItems.forEach(element => {
    let idAndCount = element.split('x');
    basicItemsInfo.push({
      id: idAndCount[0].trim(),
      count: idAndCount[1].trim()
    });
  });

  for (let i = 0; i < basicItemsInfo.length; i++) {
    for (let j = 0; j < allItems.length; j++) {
      if (basicItemsInfo[i].id === allItems[j].id) {
        basicItemsInfo[i].name = allItems[j].name;
        basicItemsInfo[i].price = allItems[j].price;
      }     
    }   
  }
  return basicItemsInfo;
}

function calcuCharge(basicItemsInfo) {
  basicItemsInfo.forEach(element => {
    element.itemTotalMoney = element.price * element.count;
  });  
  return basicItemsInfo;
}

function calcuBetterPromotion(cartsItemInfo) {
  let promotionInfo = {};
  let totalMoneyBeforePromote = calcuAllMoneyWithoutPromotion(cartsItemInfo);
  let allPromotions = loadPromotions();
  let allSpecifyDishes = allPromotions[1].items;
  let promotionMoneyOne = 0;
  let promotionMoneyTwo = 0;
  let halfPriceGoods = [];

  // 使用满减方式时的优惠金额
  if (totalMoneyBeforePromote >= 30) {
    promotionMoneyOne = 6;
  } else {
    promotionMoneyOne = 0;
  }

  // 使用半价菜品方式时的优惠金额
  for (let i = 0; i < cartsItemInfo.length; i++) {
    // let tempItemTotalMoney = 0;
    for (let j = 0; j < allSpecifyDishes.length; j++) {
      let tempItemTotalMoney = 0;
      if (cartsItemInfo[i].id === allSpecifyDishes[j]) {
        halfPriceGoods[i] = cartsItemInfo[i].name;
        tempItemTotalMoney = cartsItemInfo[i].price * 0.5 * cartsItemInfo[i].count;
        promotionMoneyTwo += tempItemTotalMoney;
        break;
      } else {
        halfPriceGoods[i] = null;
      }
    }
  }

  if (promotionMoneyOne >= promotionMoneyTwo && promotionMoneyOne !== 0) {
    promotionInfo.discount = promotionMoneyOne;
    promotionInfo.msg = '满30减6元，省6元';
  } else if (promotionMoneyTwo > promotionMoneyOne) {
    promotionInfo.discount = promotionMoneyTwo;
    let halfPriceGoodsName = "";
    for (let i = 0; i < halfPriceGoods.length; i++) {
      halfPriceGoodsName += (i < halfPriceGoods.length) ? `${halfPriceGoods[i]}，` : `${halfPriceGoods[i]}`; 
      
    }
    promotionInfo.msg = `指定菜品半价(${halfPriceGoodsName})，省${promotionInfo.discount}元`;
  } else {
    promotionInfo = null;
  }

  console.log(promotionMoneyOne);
  console.log(halfPriceGoods);
  console.log(promotionMoneyTwo);

  return promotionInfo;
}

function calcuAllMoneyWithoutPromotion(cartsItemInfo) {
  let totalMoneyBeforePromote = 0;
  cartsItemInfo.forEach(element => {
    totalMoneyBeforePromote += element.price * element.count;
  });
  return totalMoneyBeforePromote;
}

// 经减价后的商品总价
function calcuAllMoney(cartsItemInfo, promotionInfo) {
  let charge = 0;
  if (promotionInfo !== null) {
    charge = calcuAllMoneyWithoutPromotion(cartsItemInfo) - promotionInfo.discount;
  } else {
    charge = calcuAllMoneyWithoutPromotion(cartsItemInfo);
  }
  return charge;
}

function printReceipt(selectedItemsInfo, promotionInfo, charge) {
  let chargeInfo = '============= 订餐明细 =============\n';
  let receiptItemsInfo = printReceiptItemsInfo(selectedItemsInfo);
  let receiptPromotionInfo = printReceiptPromotionInfo(promotionInfo);
  let receiptTotalMoneyInfo = printReceiptTotalMoneyInfo(charge);
  chargeInfo += receiptItemsInfo + receiptPromotionInfo + receiptTotalMoneyInfo + '===================================';
  return chargeInfo;
}

function printReceiptItemsInfo(selectedItemsInfo) {
  let receiptItemsInfo = '';
  for (let i = 0; i < selectedItemsInfo.length; i++) {
    receiptItemsInfo += `${selectedItemsInfo[i].name} x ${selectedItemsInfo[i].count} = ${selectedItemsInfo[i].price * selectedItemsInfo[i].count}元\n`; 
  }
  receiptItemsInfo += '-----------------------------------\n';
  return receiptItemsInfo;
}

function printReceiptPromotionInfo(promotionInfo) {
  let receiptPromotionInfo = '';
  if (promotionInfo == null) {
    return receiptPromotionInfo;
  } else {
    receiptPromotionInfo += '使用优惠:\n' + promotionInfo.msg + '\n-----------------------------------\n';
  }
  return receiptPromotionInfo;
}

function printReceiptTotalMoneyInfo(charge) {
  let receiptTotalMoneyInfo = '';
  receiptTotalMoneyInfo += `总计：${charge}元\n`;
  return receiptTotalMoneyInfo;
}