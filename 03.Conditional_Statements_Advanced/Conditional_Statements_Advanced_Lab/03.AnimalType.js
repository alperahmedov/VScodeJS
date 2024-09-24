// 1.	dog -> mammal
// 2.	crocodile, tortoise, snake -> reptile
// 3.	others -> unknown



function animalType(animal) {

    switch (animal) {
        case "dog": console.log('mammal'); break;
        case 'crocodile': console.log('reptile'); break;
        case 'tortoise': console.log('reptile'); break;
        case 'snake': console.log('reptile'); break;
        default: console.log('unknown');
    }
}


animalType('cat');