import React from 'react';
import Sidebar from '../Sidebar';
import Content from '../Content';

const Main = ({ isDarkMode }) =>  {
  return (
    <>
      <div className="flex bg-red-300 w-full">
        <Sidebar
          isDarkMode={isDarkMode}
        />
        <Content 
          isDarkMode={isDarkMode}
        />
      </div>
    </>
  )
}


export default Main;
