// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

 const galleryListEl = document.querySelector('.gallery');
console.log(galleryListEl);

const listElemMarkup = createElemOfListMarkup(galleryItems);

const options = {
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
    animationSeed: 350,
}
galleryListEl.insertAdjacentHTML("beforeend", listElemMarkup);
 

function createElemOfListMarkup(galleryItems) {
      return galleryItems.map(({ preview, original, description }) => {
         return `
         <li class="gallery__item">
           <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
           />
         </a>
         </li>
         `;
         })
          .join('');
     
}

export const galleryLightbox = new SimpleLightbox('.gallery, .gallery__link', options);
