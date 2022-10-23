let validationInput = document.querySelector("input#validation-input");
let dataMaxLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", blurCheck);
function blurCheck(event) {
  let currentValue = event.currentTarget.value;
  if (currentValue.length !== Number(dataMaxLength)) {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}
