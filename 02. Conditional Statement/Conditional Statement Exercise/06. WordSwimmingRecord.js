function swimmingrecord(record, track, timeForOneM) {


    let time = track * timeForOneM;

    let pause = Math.floor(track / 15) * 12.5;
    time = time + pause;

    if (time >= record) {
        let time_needed = time - record;
        console.log(`No, he failed! He was ${time_needed.toFixed(2)} seconds slower.`);

    } else {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    

}



swimmingrecord(55555.67,
    3017,
    5.03
    );