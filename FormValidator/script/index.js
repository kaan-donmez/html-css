const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirmPassword);
});

checkRequired = (inputArray) => {
  for (let input of inputArray) {
    if (input.value.trim() === "") {
      showError(input, `${convertFirstLetter(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  }
};

showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "formControl error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "formControl success";
};

convertFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${convertFirstLetter(input.id)} must be at least ${min}`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${convertFirstLetter(input.id)} must be less than ${max}`
    );
  } else {
    showSuccess(input);
  }
};

checkEmail = (input) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  } else if (input1.value === input2.value) {
    showSuccess(input2);
  }
};
