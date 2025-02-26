let inputEl = document.getElementById("input-el");

let lengthDiv = document.getElementById("lengthBox");
let volumeDiv = document.getElementById("volumeBox");
let massDiv = document.getElementById("massBox");

const meterToFeet = 3.28084,
  feetToMeter = 0.3048;
const literToGallon = 0.264172,
  gallonToLiter = 3.78541;
const kiloToPound = 2.20462,
  poundToKilo = 0.453592;

function convert() {
  let userValue = Number(inputEl.value.trim());

  if (!isNaN(userValue) && userValue > 0) {
    let lengthPara = document.createElement("p");
    lengthPara.classList.add("result");
    lengthPara.textContent = `${userValue} meters = ${(
      userValue * meterToFeet
    ).toFixed(2)} feet |  
                              ${userValue} feet = ${(
      userValue * feetToMeter
    ).toFixed(2)} meters`;

    let volumePara = document.createElement("p");
    volumePara.classList.add("result");
    volumePara.textContent = `${userValue} liters = ${(
      userValue * literToGallon
    ).toFixed(2)} gallons |  
                              ${userValue} gallons = ${(
      userValue * gallonToLiter
    ).toFixed(2)} liters`;

    let massPara = document.createElement("p");
    massPara.classList.add("result");
    massPara.textContent = `${userValue} kilograms = ${(
      userValue * kiloToPound
    ).toFixed(2)} pounds |  
                            ${userValue} pounds = ${(
      userValue * poundToKilo
    ).toFixed(2)} kilograms`;

    lengthDiv.appendChild(lengthPara);
    volumeDiv.appendChild(volumePara);
    massDiv.appendChild(massPara);
  } else {
    alert("Please enter a valid number greater than 0");
  }

  inputEl.value = "";
}
