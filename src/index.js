function checkGender() {
    // Prompt the user for their gender
    let gender = prompt("Please enter your gender (Male or Female):");

    // Check the user's input and alert the appropriate message
    if (gender.user() === "female") {
        alert("You are a girl!👧🏽");
    } else if (gender.user() === "male") {
        alert("You are a boy! 👦🏽");
    } else {
        alert("Invalid input. Please enter 'Male' or 'Female'.");
    }
}

// Call the function to execute
checkGender();