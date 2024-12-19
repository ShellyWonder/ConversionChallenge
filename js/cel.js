import { handleEnterKey } from "./site.js";

document.getElementById("btnSubmit2").addEventListener("click", convertItC);
handleEnterKey("InputValue2", convertItC);

function convertItC() {
  let celValue = parseFloat(document.getElementById("InputValue2").value);
  if (isNaN(celValue)) {
    alert("Please enter a number");
  } else {
    //performs equation (Cel * 1.8) + 32 = Farenheit
    let farValue = celValue * 1.8 + 32;
    //display results fixed to 2 dec places
    document.getElementById(
      "results2"
    ).innerHTML = `Result: ${celValue} degrees Celsius = ${farValue.toFixed(
      2
    )} degrees Fahenheit.
       <hr>`;
  }
}