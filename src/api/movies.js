const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
const BASE_URL = 'https://api.themoviedb.org/3/'

export const getMovie = (movie_id) => 
  fetch(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&append_to_response=images`)
    .then(response => response.json());



export const getGeneros = () => 
  // https://api.themoviedb.org/3/genre/movie/list?api_key=35ae0ab849a7893db02cf33f003e017f&language=en-US
  fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json());
  
export const getPopularMovie = () => 
  // https://api.themoviedb.org/3/movie/latest?api_key=35ae0ab849a7893db02cf33f003e017f&language=en-US 
  fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json());

