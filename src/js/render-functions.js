import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const fragment = document.createDocumentFragment();

  images.forEach(image => {
    const item = document.createElement('li');
    item.className = 'gallery-item';
    const link = document.createElement('a');
    link.className = 'gallery-link';
    link.href = image.largeImageURL;
    const thumbnail = document.createElement('img');
    thumbnail.src = image.webformatURL;
    thumbnail.alt = image.tags;
    thumbnail.width = 360;
    thumbnail.height = 200;
    thumbnail.loading = 'lazy';
    link.append(thumbnail);

    const stats = document.createElement('dl');
    stats.className = 'image-stats';
    ['likes', 'views', 'comments', 'downloads'].forEach(name => {
      const group = document.createElement('div');
      const label = document.createElement('dt');
      label.textContent = name[0].toUpperCase() + name.slice(1);
      const value = document.createElement('dd');
      value.textContent = image[name];
      group.append(label, value);
      stats.append(group);
    });

    link.append(stats);
    item.append(link);
    fragment.append(item);
  });

  gallery.append(fragment);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.replaceChildren();
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.add('is-visible');
  gallery.setAttribute('aria-busy', 'true');
}

export function hideLoader() {
  loader.classList.remove('is-visible');
  gallery.setAttribute('aria-busy', 'false');
}
