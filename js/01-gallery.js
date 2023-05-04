import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItem = document.querySelector(".gallery");

const liPhoto = galleryItems.map((galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.preview}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`);
const photoString = liPhoto.join("");

galleryItem.insertAdjacentHTML("afterbegin", photoString);


// console.log(galleryItems);

galleryItem.addEventListener("click", onImg);

function onImg(e) {
  e.preventDefault();

  if (e.currentTarget === galleryItem) {
  console.log(e.currentTarget)
  } else { return };

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${e.target.dataset.source}" width="800" height="600">
    </div>
`)

instance.show()
}


