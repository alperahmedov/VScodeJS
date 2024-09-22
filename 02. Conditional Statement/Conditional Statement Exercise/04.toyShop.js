// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.


function toyShop(...input) {

    let travelPrice = input[0];
    let puzzles = input[1] * 2.6;
    let speekToy = input[2] * 3;
    let bear = input[3] * 4.1;
    let minions = input[4] * 8.20;
    let trucks = input[5] * 2;

    let result = puzzles + speekToy + bear + minions +trucks;

    let numbersofToys = input[1] + input[2] + input[3] + input[4] +input[5];
    
    if (numbersofToys >= 50) {
        result -= 0.25 * result;
    }

    result -= result * 0.1;
    
    let money = result - travelPrice;
   
    if (money >= 0) {
        console.log(`Yes! ${money.toFixed(2)} lv left.`);
        
    } else {
        money = travelPrice - result
        console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);
    }
}

toyShop(320,
    8,
    2,
    5,
    5,
    1    
    );
    
