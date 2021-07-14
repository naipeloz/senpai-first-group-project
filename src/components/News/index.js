import React, { useState, useEffect } from 'react';


function News (props){
    const [arrayNews, setNews] = useState([]);
    
    const renderNews = () =>{
        let tmp = <div className="w-auto">NO HAY NOTICIAS POR HOY</div>;
        if(arrayNews){
            tmp = arrayNews.map(myNews => {
                return(
                    <div className="w-1/4"> 
                    <img src={myNews.urlToImage} />
                    <h1>{myNews.title}</h1>
                    <p>{myNews.description}</p>
                    </div>                            
                )
            })
        }            
        return tmp;     
    }

    useEffect(()=>{
        // console.log(props)
        const getNews = () =>{
            const apiKey = '8d4411da3d5d4eb9ad92cc2a5c35c007';
                fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
            .then(response => {response.json()
                .then(data=>{
                    if(data.status === 'ok'){
                        setNews(data.articles);
                    }else{
                        setNews(false);
                    }                                        
                })
            }).catch(error => {
                console.error(error);
            })     
        }
        getNews();                  
    })


    return(
        <>
        <div className={`w-full flex flex-wrap p-8 ${props.isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black '} justify-center`} >            
            {renderNews()}    
        </div>
        </>
    );
}

export default News;
