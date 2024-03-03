import sumar from "./sumador.js";
import multiplicador from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("click", (event) => {
  if (event.target.type === "submit") {
    event.preventDefault();

    const firstNumber = Number.parseInt(first.value);
    const secondNumber = Number.parseInt(second.value);
    const operation = event.target.value;

    if (operation === "Sumar") {
      div.innerHTML = "<p>Suma: " + sumar(firstNumber, secondNumber) + "</p>";
    } else if (operation === "Multiplicar") {
      div.innerHTML = "<p>Multiplicación: " + multiplicador(firstNumber, secondNumber) + "</p>";
    }
  }
});