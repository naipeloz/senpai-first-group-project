// const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
// // const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=35ae0ab849a7893db02cf33f003e017f&language=en-US&page=1'


// export const getMovie = () => 
//   fetch(`${BASE_URL}${movie_id}movie/?api_key=${API_KEY}&append_to_response=images`)
//     .then(response => response.json());

const API_KEY = '35ae0ab849a7893db02cf33f003e017f';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular'


 const getMovie = () => 
  fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json());


export default getMovie;