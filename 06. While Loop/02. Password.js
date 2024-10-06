function password1(input) {
    let index = 0;

    let username = input[index];
    index++;

    let password = input[index];
    index++;

    let temporaryPassword = input[index];
    index++;

    while (temporaryPassword !== password) {
        temporaryPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
    
}

password1(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
    