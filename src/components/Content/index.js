import React, { useEffect, useState } from 'react';

const Content = ({isDarkMode}) => {
  const [ date, setDate ] = useState(new Date().toLocaleString());
  
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString())
    }, 1000);
  }, []);


  return (
    <aside className="bg-yellow-300 w-3/4">
      <p className={`${isDarkMode ? 'text-white' : 'text-blue-500'}`} > {isDarkMode } la hora es {date}</p>
    </aside>
  )
}

export default Content;
