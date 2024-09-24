function checkNumber(number) {

    if (-100 < number && number < 100 && number !== 0) {
        console.log('Yes');
    } else {
        console.log('No'); 
    }
}

// checkNumber(0);

function numberChecking(num) {

    const validateNumbers = {
        
        from: -100,
        to: 100
    }
    
    if (validateNumbers.from <= num && num <= validateNumbers.to && num !== 0) {
        console.log('Yes');
        return;
    }
    
    console.log('No');
}

numberChecking(100);