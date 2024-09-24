function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let city = arg2;
    let count = Number(arg3);
    let result = 0;

    switch(city) {
        case "Sofia":
            switch(product) {
                case "coffe": result = count * 0.5; break;
                case "water": result = count * 0.80; break;
                case "beer": result = count * 1.20; break;
                case "sweets": result = count * 1.45; break;
                case "peanuts": result = count * 1.60; break;
            }
        case "Plovdiv":
            switch(product) {
                case "coffee": result = count * 0.40; break;
                case "water": result = count * 0.70; break;
                case "beer": result = count * 1.15; break;
                case "sweets": result = count * 1.30; break;
                case "peanuts": result = count * 1.50; break;
            }
        case "Varna":
            switch(product) {
                case "coffee": result = count * 0.45; break;
                case "water": result = count * 0.70; break;
                case "beer": result = count * 1.10; break;
                case "sweets": result = count * 1.35; break;
                case "peanuts": result = count * 1.55; break;
            }
    }
    console.log(result.toFixed(2));
    
    
}

smallShop('water','Plovdiv', 2);
