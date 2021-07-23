
const API_KEY = '0ab5f95005e5ade427e6f14afd074bca';
const BASE_URL = 'http://api.currencylayer.com/live'

export const getCurrency = () => 
  fetch(`${BASE_URL}?access_key=${API_KEY}`)
    .then(response => response.json());

