let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate all input fields
    let isFormValid = validateForm();

    if (isFormValid) {
        // Redirect to success.html
        window.location.href = "success.html";
    }
});

function validateForm() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let Cpassword = document.getElementById("Cpassword");
    let errorMsg = document.getElementsByClassName("error");
    let successIcon = document.getElementsByClassName("success-icon");
    let failureIcon = document.getElementsByClassName("failure-icon");

    // Validate username
    if (username.value.trim() === '') {
        errorMsg[0].innerHTML = "Username cannot be blank";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
        return false;
    } else if (!(username.value.length > 3 && username.value.length < 13)) {
        errorMsg[0].innerHTML = "Please enter a valid username(must have at least 4 characters)";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
        return false;
    } else {
        errorMsg[0].innerHTML = "";
        failureIcon[0].style.opacity = "0";
        successIcon[0].style.opacity = "1";
    }

    // Validate email
    if (email.value === '') {
        errorMsg[1].innerHTML = "Email cannot be blank";
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
        return false;
    } else {
        errorMsg[1].innerHTML = "";
        failureIcon[1].style.opacity = "0";
        successIcon[1].style.opacity = "1";
    }

    // Validate password
    if (password.value === '') {
        errorMsg[2].innerHTML = "Password cannot be blank";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
        return false;
    } else if (!(password.value.length > 7)) {
        errorMsg[2].innerHTML = "Password must have at least 8 characters";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
        return false;
    } else {
        errorMsg[2].innerHTML = "";
        failureIcon[2].style.opacity = "0";
        successIcon[2].style.opacity = "1";
    }

    // Validate confirm password
    if (Cpassword.value === '') {
        errorMsg[3].innerHTML = "Please re-enter your password";
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
        return false;
    } else if (password.value !== Cpassword.value) {
        errorMsg[3].innerHTML = "Password is Not matched";
        failureIcon[3].style.opacity = "1";
        successIcon[3].style.opacity = "0";
        return false;
    } else {
        errorMsg[3].innerHTML = "";
        failureIcon[3].style.opacity = "0";
        successIcon[3].style.opacity = "1";
    }

    // If all validations pass, return true
    return true;
}
