const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// let listGallery = document.querySelector("ul.gallery");
// let arrayImages = [];
// for (let i= 0; i<images.length; i++){
//   let element = images[i];
//   let listLiImg = document.createElement("li");
//   let imgElement = document.createElement("img");
//   imgElement.setAttribute("src", element.url);
//   imgElement.setAttribute("alt", element.alt);
//   listLiImg.append(imgElement);
//   arrayImages.push(listLiImg);
// }

let listGallery = document.querySelector("ul.gallery");
let arrayImages = images.map(createListElement).join("");
function createListElement(element) {
  let listLiImg = `<li class="list-style"><img src=${element.url} alt="${element.alt}"></li>`;
  return listLiImg;
}
listGallery.insertAdjacentHTML("beforeend", arrayImages);
