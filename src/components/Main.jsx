import React from "react";
import Nosotros from "./Nosotros";
import "../styles/Main.css";

const Main = ({ integrantes }) => {
  return (
    <main className="main-container">
      <Nosotros integrantes={integrantes} />
    </main>
  );
};

export default Main;
