import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = form.elements['search-text'];
const submitButton = form.querySelector('button');
let isLoading = false;

iziToast.settings({ position: 'topRight', timeout: 5000 });

form.addEventListener('submit', event => {
  event.preventDefault();
  if (isLoading) return;

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search term.' });
    searchInput.focus();
    return;
  }

  clearGallery();
  showLoader();
  isLoading = true;
  submitButton.disabled = true;

  getImagesByQuery(query)
    .then(({ hits }) => {
      if (!Array.isArray(hits)) {
        throw new Error('INVALID_RESPONSE');
      }
      if (hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(error => {
      iziToast.error({
        message:
          error.message === 'MISSING_API_KEY'
            ? 'Image search is not configured yet. Please try again later.'
            : 'Unable to load images. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
      isLoading = false;
      submitButton.disabled = false;
    });
});
