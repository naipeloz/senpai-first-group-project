const apiKey = '8d4411da3d5d4eb9ad92cc2a5c35c007';

export  const getNews = (cat='', searchKey = '')=>{
    const apiKey = '3e0c6139a8dd4d479d18aab01c102797';
    let solCat =  cat ? cat : 'business';
    let skey  =  searchKey ? `&q=${searchKey}` : '';
    return fetch(`https://newsapi.org/v2/top-headlines?language=es&sortBy=popularity&pageSize=8&category=${solCat}&apiKey=${apiKey}${skey}`)
    .then(response => {
         return response.json().then(data=>data);        
    }).catch(error => {
        console.error(error);
    })  
};
