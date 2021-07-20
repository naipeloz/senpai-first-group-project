import React, {useEffect, useSate} from 'react';

const News = ({title, img, description,link,darkMode}) =>{
    
    return(
        
        <div className="w-1/4 p-2 rounded"> 
            <div className={`w-full ${darkMode ? 'bg-gray-300' : 'bg-white'}  rounded p-2`}> 
                <img src={img} />
                <h1 className="text-black font-bold" className="text-lg font-bold">{title}</h1>
                <p className="text-black">{description}</p>
                <a href={link} target="_blank" className="text-black">ver más</a>
            </div>      
        </div>  
    )

}

export  default News;
