const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const firstNameErrorIcon = document.querySelector(".first-name-icon");
const lastNameErrorIcon = document.querySelector(".last-name-icon");
const emailErrorIcon = document.querySelector(".email-icon");
const passwordErrorIcon = document.querySelector(".password-icon");

const firstNameErrorMsg = document.querySelector(".first-name-msg");
const lastNameErrorMsg = document.querySelector(".last-name-msg");
const emailErrorMsg = document.querySelector(".email-msg");
const passwordErrorMsg = document.querySelector(".password-msg");

const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    resetErrors([firstName, lastName, email, password]);

    let isValid = true;

    if (firstName.value.trim() === "") {
        showError(firstNameErrorIcon, firstNameErrorMsg, firstName)
        isValid = false;
    }

    if (lastName.value.trim() === "") {
        showError(lastNameErrorIcon, lastNameErrorMsg, lastName)
        isValid = false;
    }

    if (email.value.trim() === "" || !validEmail(email.value)) {
        showError(emailErrorIcon, emailErrorMsg, email);
        isValid = false;
    }

    if (password.value.trim() === "") {
        showError(passwordErrorIcon, passwordErrorMsg, password)
        isValid = false;
    }

    if (isValid) {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        alert("The form has been submiited!");
    }
});

function showError(icon, msg, input) {
    icon.classList.remove("none");
    msg.classList.remove("none");
    input.classList.add("error-border")
}

function resetErrors(inputs) {
    const icons = document.querySelectorAll(".error-icon");
    const msgs = document.querySelectorAll(".error-msg");

    icons.forEach(icon => icon.classList.add("none"));
    msgs.forEach(msg => msg.classList.add("none"));
    inputs.forEach(i => i.classList.remove("error-border"));
}
function validEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
}