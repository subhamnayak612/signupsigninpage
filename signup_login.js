
function validateEmail() {
    let email = document.getElementById("Email").value;

    
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (pattern.test(email)) {
        alert("Valid Email ✔");
    } else {
        alert("Invalid Email ❌");
    }
}

function validatePassword() {
    let password = document.getElementById("Password").value;

    
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (pattern.test(password)) {
        alert("Strong Password ✔");
    } else {
        alert("Weak Password ❌\nPassword must contain:\n• 8 characters\n• Uppercase letter\n• Lowercase letter\n• Number\n• Special symbol");
    }
}

function validateForm() {
    validateEmail();
    validatePassword();
}


