function cleverLily(age, washerPrice, priceToy) {
    let savedMoney = 0;
    let moneyGifted = 10;

    for (let birthay = 1; birthay <= age; birthay++) {

        if (birthay % 2 === 0) {
            savedMoney += moneyGifted - 1;
            moneyGifted += 10;
            
        } else {
            savedMoney += priceToy;
        }
    }

    if (savedMoney >= washerPrice) {
        console.log(`Yes! ${(savedMoney - washerPrice).toFixed(2)}`);
        
    } else {
        console.log(`No! ${(washerPrice-savedMoney).toFixed(2)}`);
        
    }
}

cleverLily(10,170, 6)