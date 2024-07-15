import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/vendor/fontawesome-free/css/all.css';
import '../assets/css/agency.css';

const Layout: React.FC<React.PropsWithChildren<any>> = ({
  children
}: React.PropsWithChildren<any>) => {
  const { pathname } = useLocation();
    window.scrollTo(0, 0);
  useEffect(() => {

  }, [pathname]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;