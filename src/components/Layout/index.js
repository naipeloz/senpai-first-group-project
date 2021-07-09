import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
      <Main mainClass="w-full p-4 md:w-2/3 bg-gray-200" />
      <Footer />
    </>
  )
}

export default Layout;
