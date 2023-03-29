import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const makeGallery = (elements) => {
  return elements
    .map(
      (element) => `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img
    class="gallery__image"
    loading = "lazy"
    src="${element.preview}"
    alt="${element.description}"
    />
    </a></li>`
    )
    .join("");
};
const galleryElements = makeGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryElements);

galleryRef.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
}
new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
