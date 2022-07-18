"use strict";
console.log("main.js");

//  nusitaikom
const formEl = document.forms[0];
const loginEl = document.getElementById("login");
const passwordEl = document.getElementById("password");

formEl.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  // console.log('js works');
  // .trim() - nuimam tuscius tarpus is abieju pusiu
  //   const loginValue = loginEl.value.trim();
  //   const passwordValue = passwordEl.value.trim();

  //   console.log("loginValue ===", loginValue);
  //   loginEl.value = loginValue;
  clearError();
  // email
  if (checkIfNotEmpty(loginEl)) return;

  if (checkIfNotLessThen(loginEl)) return;
  // password
  if (checkIfNotEmpty(passwordEl)) return;

  if (checkIfNotLessThen(passwordEl)) return;

  // if (passwordValue.length === 0) {
  //   console.warn('ivesk kanors');
  //   passwordEl.nextElementSibling.style.display = 'block';
  //   passwordEl.nextElementSibling.textContent = 'ivesk kanors';
  //   passwordEl.className = 'input-error';
  //   return;
  // }

  console.log("siunciam forma!!!!!!!!");
}

clearError();

loginEl.addEventListener("blur", () => {
  if (checkIfNotEmpty(loginEl)) return;

  if (checkIfNotLessThen(loginEl)) return;
});

function checkIfNotEmpty(inputEl) {
  const inputElValue = inputEl.value.trim();
  if (inputElValue.length === 0) {
    console.warn("ivesk kanors");
    inputEl.nextElementSibling.style.display = "block";
    inputEl.nextElementSibling.textContent = "ivesk kanors";
    inputEl.className = "input-error";
    return true;
  }
}
function checkIfNotLessThen(inputEl) {
  const inputElValue = inputEl.value.trim();
  if (inputElValue.length < 3) {
    console.warn("reiktu daugiau raidikiu");
    inputEl.nextElementSibling.style.display = "block";
    inputEl.nextElementSibling.textContent = "reiktu daugiau raidikiu";
    inputEl.className = "input-error";
    return true;
  }
}

function clearError() {
  loginEl.className = "";
  passwordEl.className = "";
  loginEl.nextElementSibling.style.display = "none";
  passwordEl.nextElementSibling.style.display = "none";
}
