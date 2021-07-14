import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Content from '../Content';

const Main = ({ darkMode }) =>  {
  return (
    <>
      <div className="flex bg-red-300 w-full">
        <Sidebar
          isDarkMode={darkMode}
        />
        <Content 
          isDarkMode={darkMode}
        />
      </div>
    </>
  )
}


export default Main;
