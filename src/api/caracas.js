const YOUR_ACCESS_KEY = '5196ecaa071e2fbd9f6d266d023e784d';
const BASE_URL = 'http://api.weatherstack.com/'


export const getCaracas = () => 
    fetch(`${BASE_URL}current?access_key=${YOUR_ACCESS_KEY}&query='Caracas'`)
    .then(response => response.json()) ;
