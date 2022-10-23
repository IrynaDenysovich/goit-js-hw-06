let inputStyle = document.querySelector("input#font-size-control");
let spanText = document.querySelector("span#text");

inputStyle.addEventListener("input", eventChangeFontSize);
function eventChangeFontSize(event) {
  let currentValue = event.currentTarget.value;
  spanText.style.fontSize = currentValue + "px";
}
