const API_KEY = '3e0c6139a8dd4d479d18aab01c102797';
const API_URL = 'https://newsapi.org/v2/';

export const getNews = (cat='business', searchKey = '')=> {
    let skey  =  searchKey ? `&q=${searchKey}` : '';
    return fetch(`${API_URL}top-headlines?language=es&sortBy=popularity&pageSize=8&category=${cat}&apiKey=${API_KEY}${skey}`)
        .then(response => 
            response.json()
        ).catch(error => {
            console.error(error);
        })  
};
