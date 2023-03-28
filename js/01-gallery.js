import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryElements = makeGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryElements);
galleryRef.addEventListener("click", onClickModalOpen);
let instance = "";

function makeGallery(elements) {
  return elements
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a></li>`
    )
    .join("");
}

function onClickModalOpen(event) {
  const { target } = event;
  event.preventDefault();
  if (target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`
<img
src="${target.dataset.source}"
alt="${target.alt}"
/>
`);
  instance.show();
  window.addEventListener("keydown", onEscPressModalClose);
}

function onEscPressModalClose(event) {
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onEscPressModalClose);
  }
}
