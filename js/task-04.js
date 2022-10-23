let counterValue = 0;
let counterValueElement = document.querySelector("span#value");
let buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", decrementCounter);
function decrementCounter() {
  counterValue -= 1;
  counterValueElement.textContent = counterValue;
}
let buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", incrementCounter);
function incrementCounter() {
  counterValue += 1;
  counterValueElement.textContent = counterValue;
}
