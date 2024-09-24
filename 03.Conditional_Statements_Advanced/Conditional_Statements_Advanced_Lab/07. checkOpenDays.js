function officeOpening(clock, day) {


    function checkingisOpen (clock) {
        if (10 <= clock && clock  <= 18) {
            console.log('open');
        } else console.log('closed');
    }

    switch(day) {

        case "Monday": checkingisOpen(clock); break;
        case "Tuesday": checkingisOpen(clock); break;
        case "Wednesday": checkingisOpen(clock); break;
        case "Thursday": checkingisOpen(clock); break;
        case "Friday": checkingisOpen(clock); break;
        case "Saturday": checkingisOpen(clock); break;
        default: console.log('closed');
    }
}


// officeOpening(19,
//     "Friday"
//     );

    function officeOpening2(clock, day) {

        const workingHoursMap = {
            Monday: {
                isWorking: true,
                from: 10,
                to: 18
            },
            Tuesday: {
                isWorking: true,
                from: 10,
                to: 18
            },
            Wednesday: {
                isWorking: true,
                from: 10,
                to: 18
            },
            Thursday: {
                isWorking: true,
                from: 10,
                to: 18
            },
            Friday: {
                isWorking: false,
                from: 10,
                to: 18
            },
            Saturday: {
                isWorking: true,
                from: 10,
                to: 18
            },
            Sunday: {
                isWorking: false,
                from: 10,
                to: 18
            },
        }
        const dayInfo = workingHoursMap[day];
        
        if(!dayInfo.isWorking) {
            console.log('closed');
            return;
        }

        if(clock >= dayInfo.from && clock <= dayInfo.to) {
            console.log('open');
            return;
        }

        console.log('closed');
    }

    
officeOpening2(18,
    "Friday"
    );