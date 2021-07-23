const API_KEY = '16a02594a84ca76c537ba16836251008';
const BASE_URL = 'https://api.themoviedb.org/3/movie/'

const getMovie = (movie_id) => 
  fetch(`${BASE_URL}${movie_id}?api_key=${API_KEY}&append_to_response=images`)
    .then(response => response.json());

export default getMovie;