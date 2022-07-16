import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gall = document.querySelector('.gallery');

function createGallEl() {
  return galleryItems
    .map(
      el =>
        `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
    )
    .join('');
}

gall.insertAdjacentHTML('afterbegin', createGallEl(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


console.log(galleryItems);
