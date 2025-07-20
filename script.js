let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    alert("Submitted successfully");
  }
});

function validateInputs() {
  let usernameVal = username.value.trim();
  let emailVal = email.value.trim();
  let passwordVal = password.value.trim();
  let confirmPasswordVal = confirmPassword.value.trim();

  let isValid = true; // Tracks overall form validation status

  // Validate Username
  if (usernameVal === "") {
    setError(username, "Username is required");
    isValid = false;
  } else {
    setSuccess(username);
  }

  // Validate Email
  if (emailVal === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!validateEmail(emailVal)) {
    setError(email, "Enter a valid email address");
    isValid = false;
  } else {
    setSuccess(email);
  }

  // Validate Password
  if (passwordVal === "") {
    setError(password, "Password is required");
    isValid = false;
  } else if (passwordVal.length < 8) {
    setError(password, "Password must be at least 8 characters");
    isValid = false;
  } else {
    setSuccess(password);
  }

  // Validate Confirm Password
  if (confirmPasswordVal === "") {
    setError(confirmPassword, "Confirm password is required");
    isValid = false;
  } else if (confirmPasswordVal !== passwordVal) {
    setError(confirmPassword, "Passwords do not match");
    isValid = false;
  } else {
    setSuccess(confirmPassword);
  }

  return isValid;
}

function setError(element, message) {
  let group = element.parentElement;
  let errorElement = group.querySelector(".error");

  errorElement.innerText = message;
  errorElement.classList.add("error");
  errorElement.classList.remove("success");
}

function setSuccess(element) {
  let group = element.parentElement;
  let errorElement = group.querySelector(".error");

  errorElement.innerText = "";
  errorElement.classList.add("success");
  errorElement.classList.remove("error");
}

function validateEmail(email) {
  // Standard Email Validation Regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
