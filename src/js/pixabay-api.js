import axios from 'axios';

export function getImagesByQuery(query) {
  const key = import.meta.env.VITE_PIXABAY_API_KEY;

  if (!key) {
    return Promise.reject(new Error('MISSING_API_KEY'));
  }

  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
      timeout: 15000,
    })
    .then(response => response.data);
}
