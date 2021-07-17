const YOUR_ACCESS_KEY = 'cc3fe4565f1d7ccbf0b74430fa96524e';
const BASE_URL = 'http://api.weatherstack.com/'

export const getStaffTeam = () => 
  fetch(`http://api.weatherstack.com/current?access_key=cc3fe4565f1d7ccbf0b74430fa96524e&query=New York`)
    .then(response => response.json()); 