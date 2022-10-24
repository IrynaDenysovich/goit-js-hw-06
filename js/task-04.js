let counterValue = 0;
let counterValueElement = document.querySelector("span#value");

let buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener("click", clickEvent);

let buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener("click", clickEvent);

function clickEvent(event) {
  let action = event.currentTarget.getAttribute("data-action");
  if (action == "decrement") {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }
  counterValueElement.textContent = counterValue;
}
