const API_KEY = '10eba7e8b88040bbb580abe53f4fe5d2b3cf7136ccde39f5fa762e9aeb3ecb95';
const BASE_URL = 'https://apiv3.apifootball.com/'

export const getResults = () => 
  fetch(`${BASE_URL}?action=get_events&from=2021-07-12&to=2021-07-12&APIkey=${API_KEY}`)
    .then(response => response.json()); 