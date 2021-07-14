import React, { useState } from 'react';


function News (){
    const [arraNews, getAllNews] = useState([])

    const getNews = () =>{
        const apiKey = '8d4411da3d5d4eb9ad92cc2a5c35c007';
         return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
                .then(response => {response.json()
                    .then(data=>{
                        console.log(data.articles);
                        getAllNews(data.articles);
                    })
                }).catch(error => {
                    console.error(error);
                })     
    }    

    return(
        <>
            {/* {getNews()} */}
            <div className="w-full flex flex-wrap bg-gray-300"> 
                <button onClick={()=>getNews()} >Cargar Noticias</button>
                {arraNews.forEach(myNews => {
                    <div className="w-1/4"> 
                        <img src={myNews.urlToImage} />
                        <h1>{myNews.title}</h1>
                        <p>{myNews.description}</p>
                    </div>
                })}
            </div>
        </>
    );
}

export default News;
