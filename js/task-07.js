let inputStyle = document.querySelector("input#font-size-control");
let spanText = document.querySelector("span#text");

inputStyle.addEventListener("input", eventChangeFontSize);
function eventChangeFontSize(event) {
  let currentValue = event.currentTarget.value;
  changeFontSize(currentValue);
}

function changeFontSize(value) {
  spanText.style.fontSize = value + "px";
}

changeFontSize(inputStyle.value);
