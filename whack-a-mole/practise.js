function randomTime(min, max) {

    return Math.floor(Math.random()*(max-min+1)+min);
    // TODO: 写生成随机数的逻辑，

}
console.log(randomTime(1,10));
