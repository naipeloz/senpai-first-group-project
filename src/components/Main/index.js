import React, { Component } from 'react';
import Sidebar from '../Sidebar';

const Main = ({ darkMode }) =>  {
  return (
    <>
      <div className="flex bg-red-300 w-full">
        <Sidebar
          isDarkMode={darkMode}
        />
        <main className="bg-yellow-300 w-3/4">
          Main content
        </main>
      </div>
    </>
  )
}


export default Main;
