//Dark Mode Button
const modeBtn = document.getElementById("btn");
const heading = document.getElementById("heading");

btn.addEventListener("click", onButtonClick);

function onButtonClick() {
  document.body.classList.toggle("dark");
  modeBtn.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    document.modeBtn = "Dark Mode";
    modeBtn.innerText = "Light Mode";
    heading.classList.toggle("white");
  } else {
    document.modeBtn = "Light Mode";
    modeBtn.innerText = "Dark Mode";
  }
  console.log(document.modeBtn);
}

//Password hidden and shown

const input = document.querySelector("#input");
const btnShow = document.querySelector("#showpassword");

btnShow.addEventListener("click", function () {
  console.log("click");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});

// Counter

const counterHeading = document.querySelector("#counterHeading");
const counterOutput = document.querySelector("#counterOutput");
let counter = 0;

document.body.addEventListener("click", changeWidth);
document.body.addEventListener("keydown", changeCounterByTen);

function changeWidth() {
  if (counter < 100) {
    counter++;
  } else if (counter >= 100) {
    counter = 0;
  }
  counterHeading.style.width = counter + "%";
  counterOutput.innerText = counter;
}

function changeCounterByTen(e) {
  if (e.key === " ") {
    if (counter < 100) {
      counter = counter + 10;
    } else if (counter >= 100) {
      counter = 0;
    }
    counterHeading.style.width = counter + "%";
    counterOutput.innerText = counter;
  }
}

// Checkbox

const fastCheck = document.querySelector(".fast");
const cheapCheck = document.querySelector(".cheap");
const goodCheck = document.querySelector(".good");
lastCheckbox = null;

function toggle(clickedCheckbox, otherCheckbox1, otherCheckbox2) {
  if (
    clickedCheckbox.checked &&
    otherCheckbox1.checked &&
    otherCheckbox2.checked
  ) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox;
}

fastCheck.addEventListener("change", function () {
  toggle(fastCheck, cheapCheck, goodCheck);
});

cheapCheck.addEventListener("change", function () {
  toggle(cheapCheck, fastCheck, goodCheck);
});

goodCheck.addEventListener("change", function () {
  toggle(goodCheck, cheapCheck, fastCheck);
});

//Clock

function updateTime() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  // digi clock
  document.querySelector(".digi-clock__hours").innerText =
    formatNumberString(hours);
  document.querySelector(".digi-clock__minutes").innerText =
    formatNumberString(minutes);
  document.querySelector(".digi-clock__seconds").innerText =
    formatNumberString(seconds);

  // classic clock
  const hoursEl = document.querySelector(".clock__hours");
  hoursEl.style.setProperty("--hours", hours * 30 + "deg");

  const minutesEl = document.querySelector(".clock__minutes");
  minutesEl.style.setProperty("--minutes", minutes * 6 + "deg");

  const secondsEl = document.querySelector(".clock__seconds");
  secondsEl.style.setProperty("--seconds", seconds * 6 + "deg");

  document
    .querySelectorAll(".digi-clock__dots")
    .forEach((e) => e.classList.toggle("digi-clock__dots--hidden"));
}

function formatNumberString(n) {
  let s = "0" + n.toString();
  return s.slice(-2);
}

updateTime();
setInterval(updateTime, 1000);
