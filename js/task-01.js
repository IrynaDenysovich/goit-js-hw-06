let arrayChildren = document.querySelectorAll("ul#categories > li.item");
console.log("Number of categories: " + arrayChildren.length);

arrayChildren.forEach(findElements);
function findElements(element) {
  let categoryHeader = element.querySelector("h2");
  console.log("Category: " + categoryHeader.textContent);
  let arrayElements = element.querySelectorAll("ul > li");
  console.log("Elements: " + arrayElements.length);
}
