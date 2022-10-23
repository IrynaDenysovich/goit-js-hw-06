const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listIngredients = document.querySelector("ul#ingredients");
let arrayIngredients = ingredients.map(createListItem);
function createListItem(ingredientName) {
  let elementIngredient = document.createElement("li");
  elementIngredient.textContent = ingredientName;
  elementIngredient.classList.add("item");
  return elementIngredient;
}
listIngredients.append(...arrayIngredients);
