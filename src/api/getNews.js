function getNews (cat=''){
    const apiKey = '8d4411da3d5d4eb9ad92cc2a5c35c007';
    let solCat =  cat ? cat : 'business';
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${solCat}&apiKey=${apiKey}`)
    .then(response => {response.json()
        .then(data=>{
            if(data.status === 'ok'){
                return data.articles;
            }else{
                return false;   
            }                                        
        })
    }).catch(error => {
        console.error(error);
    })  
};