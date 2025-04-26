import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const Home = (props) => {
  const { nombre, persona, grupo } = props;

  return (
    <>
      <Header />
      <Main nombre={nombre} persona={persona} grupo={grupo} />
      <Footer />
    </>
  );
};

export default Home;
