import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </>
  )
}

export default Layout;
