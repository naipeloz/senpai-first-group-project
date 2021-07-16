import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [ darkMode, setDarkMode ] = useState(true);
  const [ date, setDate ] = useState(new Date().toLocaleString());
  
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString())
    }, 1000);
  }, []);

  return (
    <>
      <div className="p-2">
        <button 
          className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} text-xs p-2 rounded`}
          onClick={() => {setDarkMode(!darkMode)}}
        >
          Dark Mode {darkMode ? 'On' : 'Off'}
        </button>
        <p className='text-blue-500'> la hora es {date}</p>
      </div>
      <Header 
        isDarkMode={darkMode}
      />
      <Main 
        isDarkMode={darkMode}
      />
      <Footer 
        isDarkMode={darkMode}
      />
    </>
  )
}

export default Layout;
