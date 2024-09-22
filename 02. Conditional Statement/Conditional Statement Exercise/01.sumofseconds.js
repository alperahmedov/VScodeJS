function sumOfseconds(arg1, arg2, arg3) {
    let time = arg1 + arg2 + arg3

    let minutes = Math.floor(time / 60);
    let seconds = time % 60
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    console.log(`${minutes}:${seconds}`);
    
}

sumOfseconds(14,12,10);


