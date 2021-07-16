import React from 'react';
import React, { useState, useEffect } from 'react';
import '../api/getNews';

import {
  useParams
} from 'react-router-dom';

const NewsPage = (props) => {
  
  const { id } = useParams();

  return (
    <>
    <div className="{`w-full  ${props.isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black '}`}">
      <h1>Noticias</h1>      
      <div className="flex flex-wrap p-8 justify-center">

      </div>              
    </div>      
    </>
  )
  
}

export default NewsPage;
