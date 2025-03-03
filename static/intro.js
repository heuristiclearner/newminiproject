/*let nameInput = document.getElementById('name');
console.log(nameInput);

let errorMessages = document.getElementsByClassName('error-message');
console.log(errorMessages);

let emailInput = document.querySelector("#email");
console.log(emailInput);

let allInputs = document.querySelectorAll("input");
console.log(allInputs);

document.getElementById("myform").addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form submitted");
});

document.getElementById("email").addEventListener("input",function(){
    console.log("User is typing:" + this.value)});

/*document.getElementById("name").addEventListener("blur",function(){
    //console.log("User left the name field");
//})

document.getElementById("name").addEventListener("input",function(){
    let namevalue = this.value;
    console.log(namevalue);
});

document.getElementById("email").value = "test@example.com";


let email = "test@gmail.com";
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test(email));


let pass = "Chiru8939";
let passPattern  = /^(?=.*\d)[A-Za-z\d]{6,}$/;
if (!passPattern.test(pass)){
    console.log("Password must be at least 6 characters long and contain at least one number");
}


function showError(inputId, message){
let inputField = document.getElementById(inputId);
let errorSpan = inputField.nextElementSibling;
errorSpan.textContent = message;}


showError("email","Invalid email address");*/

document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Name validation (must not be empty)
    if (name === "") {
        showError("name", "Name is required.");
        isValid = false;
    }

    // Email validation (valid format)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("email", "Enter a valid email address.");
        isValid = false;
    }

    // Password validation (at least 6 characters, must include number)
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordPattern.test(password)) {
        showError("password", "Password must be at least 6 characters long and include a number.");
        isValid = false;
    }

    // Confirm Password validation
    if (confirmPassword !== password) {
        showError("confirmPassword", "Passwords do not match.");
        isValid = false;
    }

    // If all validations pass, submit form
    if (isValid) {
        alert("Form submitted successfully!");
    }
});

// Function to show error messages
function showError(inputId, message) {
    let inputField = document.getElementById(inputId);
    let errorSpan = inputField.nextElementSibling;
    errorSpan.textContent = message;
}

