const signupForm = document.getElementById("signupForm");
const signupSubmit = document.getElementById("signupSubmit");
signupForm.addEventListener("submit", event => {
    event.preventDefault();
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Does not match password.");
        console.log(password.value);
        console.log(confirmPassword.value);
        return;
    }
    const formData = new FormData(signupForm, signupSubmit);
    for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
    }
});