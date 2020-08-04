document.getElementById("main_form").onsubmit = function () {
    var x = document.forms["main_form"]["name"].value;
    var y = document.forms["main_form"]["l_name"].value;
    var z = document.forms["main_form"]["email"].value;
    var a = document.forms["main_form"]["password"].value;

    var submit = true;

    if (x == null || x == "") {
        nameError = "Please enter your first name <img src='images/icon-error.svg'>";
        document.getElementById("name_error").innerHTML = nameError;
        submit = false;
    }

    if (y == null || y == "") {
        lnameError = "Please enter your last name <img src='images/icon-error.svg'>";
        document.getElementById("l_name_error").innerHTML = lnameError;
        submit = false;
    }

    if (z == null || z == "") {
        emailError = "Please enter your email <img src='images/icon-error.svg'>";
        document.getElementById("email_error").innerHTML = emailError;
        submit = false;
    }
    if (a == null || a == "") {
        passwordError = "Please enter your password <img src='images/icon-error.svg'>";
        document.getElementById("password_error").innerHTML = passwordError;
        submit = false;
    }

    return submit;
}

function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("l_name").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("password").onkeyup = removeWarning;