import { galleryItems } from "./gallery-items.js";
const ulEl = document.querySelector(`ul.gallery`);
let allPictures = "";
galleryItems.forEach((object) => {
  allPictures += `<a class="gallery__item" href="${object.original}">
  <img class="gallery__image" src="${object.preview}" alt="${object.description}" />
</a>`;
});

ulEl.innerHTML = allPictures;

ulEl.addEventListener(`click`, onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
const lightBox = new SimpleLightbox(`.gallery a`, {
  captionsData: "alt",
  captionsDelay: 250,
});
console.log(galleryItems);
