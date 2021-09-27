import calculateTotal from "./App";

const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price");
const state = document.querySelector("#state");
const form = document.querySelector("#calculate-form");
const div = document.querySelector("#result-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const quantityNumber = Number.parseInt(quantity.value);
  const priceNumber = Number.parseInt(price.value);
  div.innerHTML = "<p>" + calculateTotal(quantityNumber, priceNumber, state.value) + "</p>";
});
