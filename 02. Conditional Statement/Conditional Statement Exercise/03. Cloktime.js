function clockTime(hour, minutes) {

    let hourInMinutes = hour * 60;
    let result = hourInMinutes + minutes + 15;

    let newHour = Math.floor(result / 60);
    if (newHour > 23) {
        newHour = 0
    }
    let newMinutes = result % 60;
    if (newMinutes < 10) {
        newMinutes = `0${newMinutes}`
    }

    console.log(`${newHour}:${newMinutes}`);
    
}

clockTime(23,59);