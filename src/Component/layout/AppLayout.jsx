//import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

const AppLaout = () => {  

  return (
    <>
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  );
};

export default AppLaout;
