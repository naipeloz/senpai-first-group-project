import React, { useState, useEffect } from 'react';
import {getNews} from '../api/getNews';
import News from '../components/News';

import {
  useParams
} from 'react-router-dom';

 const NewsPage = (props) => {
  
  const { cat } = useParams();
  const [arrayNews, setNews] = useState([]);

  const renderNews = () =>{
    let tmp = <div className="w-auto">NO HAY NOTICIAS POR HOY</div>;
    if(arrayNews){
        tmp = arrayNews.map(myNews => {
            return(
                <News
                  title = {myNews.title}
                  img = {myNews.urlToImage}
                  description = {myNews.description}
                  link = {myNews.url}
                  darkMode = {props.isDarkMode}
                  />                
            )
        })
    }            
    return tmp;     
  }

  const changeCat =()=>{
    // window.location.href="/news/";
    console.log('error')
  }

  useEffect(()=>{
    getNews().then((response)=>{      
      if(response.status === 'ok'){
        setNews(response.articles);
      }      
    })
  },[])

  return (
    <>
    <div className={`w-full  ${props.isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black '}`}>
      <h1 className="font-bold p-1 text-5xl">Noticias</h1>
      <div className="buscador flex">
          <div className="m-4">
              <label>Categorias</label>              
              <select id="cat" name="cat"   className='bg-white text-black p-1 m-1' onChange={changeCat()}>
                  <option value="business">Negocios</option>
                  <option value="entertainment" >Entretenimiento</option>
                  <option value="general" >General</option>
                  <option value="health" >Salud</option>
                  <option value="science" >Ciencia</option>
                  <option value="sports" >Deportes</option>
                  <option value="technology" >Tecnología</option>          
              </select>
          </div>
          <div className="m-4">            
            <input id="buscar" type="text" name="search" className=" m-1"/> 
            <button>Buscar</button>
          </div>
      </div>
      

      <div className="flex flex-wrap p-8 justify-center">
          {renderNews()}
      </div>              
    </div>      
    </>
  )
  
}

export default NewsPage;
