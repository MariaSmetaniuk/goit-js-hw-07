import { galleryItems } from './gallery-items.js';
// Change code below this line

// посилання на div з галереєю
const galleryRef = document.querySelector('.gallery');

// створення і рендер розмітки елементів галереї
const galleryElements = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryElements);


// делегування кліку по картинках
galleryRef.addEventListener('click', onOpenModal);


// змінна екземпляру класу модалки
let modalInstance;

// функція відкриття модалки
function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;

  window.addEventListener('keydown', onEscClose);

  modalInstance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);  
  modalInstance.show();
}

// функція закриття модалки клавішею Esc
function onEscClose(e) {
  if (e.code !== 'Escape') return;

  modalInstance.close(); 
  window.removeEventListener('keydown', onEscClose);
}