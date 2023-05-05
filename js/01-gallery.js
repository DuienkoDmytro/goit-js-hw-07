import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItem = document.querySelector(".gallery");

const liPhoto = galleryItems.map((galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`).join("");

galleryItem.insertAdjacentHTML("afterbegin", liPhoto);


// console.log(galleryItems);

galleryItem.addEventListener("click", onImg);

function onImg(e) {
  e.preventDefault();

  const isGalleryImage = e.target.classList.contains("gallery__image");
 if (!isGalleryImage ) {
   return
  };
  
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${e.target.dataset.source}">
    </div>
`);

instance.show()
}


