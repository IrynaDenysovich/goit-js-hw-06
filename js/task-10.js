let width = 30;
let height = 30;
let delta = 10;

let input = document.querySelector("input[type='number']");
let divBoxes = document.querySelector("div#boxes");

let buttonCreate = document.querySelector("[data-create]");
let buttonDestroy = document.querySelector("[data-destroy]");

buttonDestroy.addEventListener("click", desctroyEvent);
function desctroyEvent() {
  divBoxes.innerHTML = "";
}

buttonCreate.addEventListener("click", createEvent);
function createEvent() {
  reateBoxes(Number(input.value));
}

function reateBoxes(amount) {

  let childLength = divBoxes.children.length;
  let newChilds = [];

  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    let childIndex = i + childLength;

    div.style.width = width + childIndex * delta + "px";
    div.style.height = height + childIndex * delta + "px";
    div.style.backgroundColor = getRandomHexColor();

    newChilds.push(div);
  }

  divBoxes.append(...newChilds);

  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
