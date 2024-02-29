let days = document.getElementById("day");
let months = document.getElementById("month");
let years = document.getElementById("year");
let arrowKey = document.getElementById("arrowdown");
let arrowKey1 = document.getElementById("arrowdown1");
let valid1 = document.getElementById("validday");
let valid2 = document.getElementById("validmonth");
let valid3 = document.getElementById("validyear");
let validday = document.getElementById("daycolor");
let validmonth = document.getElementById("monthcolor");
let validyear = document.getElementById("yearcolor");

let getYear = new Date().getFullYear();

arrowKey.addEventListener("click", () => {
  let day1 = days.value;
  let month1 = months.value;
  let year1 = years.value;

  if (day1 == "") {
    valid1.innerText = "Date is required.";
    valid1.style.visibility = "visible";
    validday.style.color = "red";
    return;
  } else if (day1 < 1 || day1 > 31) {
    valid1.innerText = "Not a valid date!";
    valid1.style.visibility = "visible";
    validday.style.color = "red";
    return;
  } else {
    validday.style.color = "gray";
    valid1.style.visibility = "hidden";
  }

  if (month1 == "") {
    valid2.innerText = "Month is required.";
    valid2.style.visibility = "visible";
    validmonth.style.color = "red";
    return;
  } else if (month1 < 1 || month1 > 12) {
    valid2.innerText = "Not a valid month!";
    valid2.style.visibility = "visible";
    validmonth.style.color = "red";
    return;
  } else {
    validmonth.style.color = "gray";
    valid2.style.visibility = "hidden";
  }

  if (year1 == "") {
    valid3.innerText = "Year is required.";
    valid3.style.visibility = "visible";
    validyear.style.color = "red";
    return;
  } else if (year1.length < 4 || year1.length > 4 || year1 > getYear) {
    valid3.innerText = "Not a valid year!";
    valid3.style.visibility = "visible";
    validyear.style.color = "red";
    return;
  } else {
    validyear.style.color = "gray";
    valid3.style.visibility = "hidden";
  }

  if (day1 && month1 && year1) {
    const birthDate = new Date(year1, month1 - 1, day1);
    const getDays = (new Date() - birthDate) / (1000 * 60 * 60 * 24);
    let remainingDays = getDays % 365.25;
    let ageYears = Math.floor(getDays / 365.25);
    let ageMonths = Math.floor(remainingDays / 30);
    let ageDay = Math.floor(remainingDays % 30);
    document.getElementById("year2").innerHTML = ageYears;
    document.getElementById("month2").innerHTML = ageMonths;
    document.getElementById("day2").innerHTML = ageDay;
  }
});

arrowKey1.addEventListener("click", () => {
  let startTime = performance.now();
  let day1 = days.value;
  let month1 = months.value;
  let year1 = years.value;

  if (day1 == "") {
    valid1.innerText = "Date is required.";
    valid1.style.visibility = "visible";
    validday.style.color = "red";
    return;
  } else if (day1 < 1 || day1 > 31) {
    valid1.innerText = "Not a valid date!";
    valid1.style.visibility = "visible";
    validday.style.color = "red";
    return;
  } else {
    validday.style.color = "gray";
    valid1.style.visibility = "hidden";
  }

  if (month1 == "") {
    valid2.innerText = "Month is required.";
    valid2.style.visibility = "visible";
    validmonth.style.color = "red";
    return;
  } else if (month1 < 1 || month1 > 12) {
    valid2.innerText = "Not a valid month!";
    valid2.style.visibility = "visible";
    validmonth.style.color = "red";
    return;
  } else {
    validmonth.style.color = "gray";
    valid2.style.visibility = "hidden";
  }

  if (year1 == "") {
    valid3.innerText = "Year is required.";
    valid3.style.visibility = "visible";
    validyear.style.color = "red";
    return;
  } else if (year1.length < 4 || year1.length > 4 || year1 > getYear) {
    valid3.innerText = "Not a valid year!";
    valid3.style.visibility = "visible";
    validyear.style.color = "red";
    return;
  } else {
    validyear.style.color = "gray";
    valid3.style.visibility = "hidden";
  }
  if (day1 && month1 && year1) {
    const birthDate = new Date(year1, month1 - 1, day1);
    const getDays = (new Date() - birthDate) / (1000 * 60 * 60 * 24);
    let remainingDays = getDays % 365.25;
    let ageYears = Math.floor(getDays / 365.25);
    let ageMonths = Math.floor(remainingDays / 30);
    let ageDay = Math.floor(remainingDays % 30);
    document.getElementById("year2").innerHTML = ageYears;
    document.getElementById("month2").innerHTML = ageMonths;
    document.getElementById("day2").innerHTML = ageDay;
  }
  let endTime = performance.now();
  console.log(`Time Taken: ${endTime - startTime}`);
});
