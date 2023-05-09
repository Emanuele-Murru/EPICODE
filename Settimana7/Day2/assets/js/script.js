//////////////////////////////     FORM      ///////////////////////////////////////

const nameField = document.getElementById("inputName");
const submit = document.getElementById("submitForm");
const reset = document.getElementById("resetForm");

submitForm.addEventListener("click", function (e) {
  e.preventDefault();
  let newName = inputName.value;
  localStorage.setItem("name", newName);
});

resetForm.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("name");
  nameField.value = "";
});

const refreshLastText = function () {
  let lastText = localStorage.getItem("name");
  if (lastText) {
    document.getElementById("lastDigits").innerHTML = lastDigits.value =
      " The last name used is: " + lastText;
  }
};

onload = function () {
  document.getElementById("inputName").innerHTML = inputName.value = "";
  refreshLastText();
};


//////////////////////////////   TIMER    ///////////////////////////////////////


let secondCounter = document.querySelector("span");
let seconds = 0;

if(sessionStorage.getItem('timer')){
  seconds = Number(sessionStorage.getItem('timer'))
}

let secondsIncrement = function () {
  seconds++;
  secondCounter.innerHTML = seconds;
  sessionStorage.setItem("timer", seconds);
};

setInterval(secondsIncrement, 1000);
