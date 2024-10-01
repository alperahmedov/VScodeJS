function invalidNumber(num) {

    let result = ''

    if (num < 100 || num > 200) {
        result = 'invalid';
    } else {
        result = '';
    }
    
    if (num === 0) {
       result = '';
    }

    console.log(result);
    
}


invalidNumber(201);