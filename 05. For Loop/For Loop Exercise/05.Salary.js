function salary (input) {
    let tabCount = input[0];
    let salary = input[1];

    for (let i = 2; i < tabCount  + 2; i++) {
        let currentWebsite = input[i];

        if (currentWebsite === 'Facebook') {
            salary -= 150;
        } else if (currentWebsite === "Instagram") {
            salary -= 100;
        } else if (currentWebsite === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log('You have lost your salary.');
            return;
        }
        
        
    }
    console.log(salary);

}


salary([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
    
    
    