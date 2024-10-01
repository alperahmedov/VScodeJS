function tradeCommission(city, profit) {

    let result = 0;

    switch(city) {
    case "Sofia":
        if (profit >= 0 && profit <= 500) { 
            result = profit * 0.05;
        } else if (profit > 500 && profit <= 1000) {
            result = profit * 0.07;
        } else if (profit > 1000 && profit <= 10000) {
            result = profit * 0.08;
        } else if (profit > 10000) {
            result = profit* 0.12;
        }
        break;
    case "Varna":
        if (profit >= 0 && profit <= 500) { 
            result = profit * 0.045;
        } else if (profit > 500 && profit <= 1000) {
            result = profit * 0.075;
        } else if (profit > 1000 && profit <= 10000) {
            result = profit * 0.1;
        } else if (profit > 10000) {
            result = profit* 0.13;
        }
        break;
        
    case "Plovdiv":
        if (profit >= 0 && profit <= 500) { 
            result = profit * 0.055;
        } else if (profit > 500 && profit <= 1000) {
            result = profit * 0.08;
        } else if (profit > 1000 && profit <= 10000) {
            result = profit * 0.12;
        } else if (profit > 10000) {
            result = profit* 0.145;
        }
        break;
    
    default: 
        console.log('error');
        return;

    }

    if (profit < 0) {
        console.log('error');
        return;
    }

    if (result > 0) {
        console.log(result.toFixed(2));
    }
  
}

tradeCommission("Kaspican",
-50
)