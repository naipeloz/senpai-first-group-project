const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
const BASE_URL = 'https://api.themoviedb.org/3/'

export const getMovie = (movie_id) => 
  fetch(`${BASE_URL}${movie_id}movie/?api_key=${API_KEY}&append_to_response=images`)
    .then(response => response.json());

