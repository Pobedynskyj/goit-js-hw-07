import { galleryItems } from "./gallery-items.js";
let allPictures = "";
galleryItems.forEach((object) => {
  allPictures += `<div class="gallery__item">
        <a class="gallery__link" href="${object.original}">
        <img class="gallery__image"
        src="${object.preview}"
        data-source="${object.original}"
        alt="${object.desription}"
        />
        </a>
        </div>`;
});
const divEl = document.querySelector(`div.gallery`);
divEl.innerHTML = allPictures;

divEl.addEventListener(`click`, onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" alt="${event.target.description}">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeIns);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeIns);
      },
    }
  );
  instance.show();

  function closeIns(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
