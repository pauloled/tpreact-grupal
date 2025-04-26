import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomePages = ({ integrantes }) => {
  return (
    <>
      <Header />
      <Main integrantes={integrantes} />
      <Footer />
    </>
  );
};

export default HomePages;
