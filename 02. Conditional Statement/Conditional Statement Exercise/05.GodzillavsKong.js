function fight(budget, statistNum, dressPrice) {

    let decor = budget * 0.1;

    let priceForClothes  = statistNum * dressPrice;
    if (statistNum > 150) {
        priceForClothes *= 0.9;
    }

    let totalPrice = decor + priceForClothes;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log("Action!" );
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
        
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
        
        
    }

}


fight(20000, 120, 55.5);