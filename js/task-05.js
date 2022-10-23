let inputElem = document.querySelector("input#name-input");
let nameLabel = document.querySelector("span#name-output");
inputElem.addEventListener("input", inputEvent);

function inputEvent(event) {
  let inputValue = event.currentTarget.value;
  if (inputValue == "") {
    inputValue = "Anonymous";
  }
  nameLabel.textContent = inputValue;
}
