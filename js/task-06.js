let validationInput = document.querySelector("input#validation-input");
let dataMaxLength = Number(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", blurCheck);
function blurCheck(event) {
  let target = event.currentTarget;
  if (target.value.length !== dataMaxLength) {
    target.classList.add("invalid");
    target.classList.remove("valid");
  } else {
    target.classList.remove("invalid");
    target.classList.add("valid");
  }
}
