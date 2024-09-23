function personalTitles(arg1, arg2) {
    
    let age = Number(arg1);
    let gender = arg2;

    if (gender === 'f') {
        if (age >= 16) {
            console.log('Ms.');
            
        } else if (age < 16) {
            console.log('Miss');
        }

    } else if ( gender === 'm') {
        if (age >= 16) {
            console.log('Mr.');
            
        } else if (age < 16) {
            console.log('Master');
        }
    }

}
personalTitles(16, 'f')


