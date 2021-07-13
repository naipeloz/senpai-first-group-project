import React, { useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [ darkMode, setDarkMode ] = useState(false);

  return (
    <>
      <div className="p-2">
        <button 
          className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} p-2 rounded`}
          onClick={() => {setDarkMode(!darkMode)}}
        > 
          Dark Mode {darkMode ? 'On' : 'Off'}
        </button>
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
