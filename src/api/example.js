const ciudades = ['New York','London']  

const YOUR_ACCESS_KEY = 'cc3fe4565f1d7ccbf0b74430fa96524e';
const BASE_URL = 'http://api.weatherstack.com/'


export const getStaffTeam = () => 
    fetch(`${BASE_URL}current?access_key=${YOUR_ACCESS_KEY}&query='New York'`)
    .then(response => response.json()) ;

 