const convertEl = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#user-in");
const lengthEl = document.querySelector("#length-p");
const volumeEl = document.querySelector("#volume-p");
const massEl = document.querySelector("#mass-p");
const METER2FOOT = 3.28084;
const LITER2GALLON = 0.264172;
const KG2LB = 2.20462;

convertEl.addEventListener("click", function () {
  const quantity = inputEl.value;

  // Length
  lengthEl.textContent = `
  ${quantity} meters = ${(quantity * METER2FOOT).toFixed(3)} feet |
  ${quantity} feet = ${(quantity / METER2FOOT).toFixed(3)} meters`;

  //Volume
  volumeEl.textContent = `
  ${quantity} liters = ${(quantity * LITER2GALLON).toFixed(3)} gallons |
  ${quantity} gallons = ${(quantity / LITER2GALLON).toFixed(3)} liters`;

  //Mass
  massEl.textContent = `
  ${quantity} kilos = ${(quantity * KG2LB).toFixed(3)} pounds |
  ${quantity} pounds = ${(quantity / KG2LB).toFixed(3)} kilos`;
});
