import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const HomePages = ({ integrantes }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Main integrantes={integrantes} />
      <Footer />
    </>
  );
};

export default HomePages;
