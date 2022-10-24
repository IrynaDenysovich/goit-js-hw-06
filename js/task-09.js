let buttonChangeColor = document.querySelector("button.change-color");
let spanColor = document.querySelector("span.color");
let bodyStyle = document.querySelector("body");

buttonChangeColor.addEventListener("click", buttonChangeClick);
function buttonChangeClick() {
  let randomColor = getRandomHexColor();
  bodyStyle.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
