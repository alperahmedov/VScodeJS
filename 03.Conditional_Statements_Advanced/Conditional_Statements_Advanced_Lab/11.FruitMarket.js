function fruitMarket(fruit, day, quantity){
    let result = 0;

    switch(day) {
        case "Monday" :
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit) {
                case "banana": 
                result = 2.5 * quantity; break;
                case "apple": 
                result = 1.2 * quantity; break;
                case "orange": 
                result = 0.85 * quantity; break;
                case "grapefruit": 
                result = 1.45 * quantity; break;
                case "kiwi": 
                result = 2.7 * quantity; break;
                case "pineapple": 
                result = 5.50 * quantity; break;
                case "grapes": 
                result = 3.85 * quantity; break;
                default: console.log('error');
            }
            break;

        case "Saturday":
        case "Sunday":
            switch(fruit) {
                case "banana": 
                result = 2.7 * quantity; break;
                case "apple": 
                result = 1.25 * quantity; break;
                case "orange": 
                result = 0.9 * quantity; break;
                case "grapefruit": 
                result = 1.60 * quantity; break;
                case "kiwi": 
                result = 3 * quantity; break;
                case "pineapple": 
                result = 5.60 * quantity; break;
                case "grapes": 
                result = 4.2 * quantity; break;
                default: console.log('error');
                
            }
      
        break;
        default: console.log('error');
        

    }
    if (result > 0) {
        console.log(result.toFixed(2));
    }
    
    
}

fruitMarket('banana', 'Tuesday', 2);
