const API_KEY = 'b7a67ac68f2c1fab2d23e0eb20b01e43741e7662f156d2f9be19105bb69c4fe3';
const BASE_URL = 'https://apiv3.apifootball.com/'

export const getStaffTeam = () => 
  fetch(`${BASE_URL}?action=get_teams&league_id=302&APIkey=${API_KEY}`)
    .then(response => response.json()); 