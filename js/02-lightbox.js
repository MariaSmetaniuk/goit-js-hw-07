import { galleryItems } from './gallery-items.js';
// Change code below this line

// посилання на div з галереєю
const galleryRef = document.querySelector('.gallery');

// створення і рендер розмітки елементів галереї
const galleryElements = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"></a></li>`).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryElements);


// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });