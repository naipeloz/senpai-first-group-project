const API_KEY = '3f5f292cb66187502c21b62f83febd7ad93e7943caf4012a7cb7345352626f3c'
const BASE_URL = 'https://apiv3.apifootball.com/'

export const getTopScorers = () =>
    fetch(`${BASE_URL}?action=get_topscorers&league_id=302&APIkey=${API_KEY}`)
    .then(response => response.json());
    
