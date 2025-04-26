import React from "react";
import "../styles/Header.css";

const Header = () => {
  const integrantes = [
    { id: "lucas", nombre: "Lucas", foto: "https://via.placeholder.com/150" },
    { id: "luciana", nombre: "Luciana", foto: "https://via.placeholder.com/150" },
    { id: "julieta", nombre: "Julieta", foto: "https://via.placeholder.com/150" },
    { id: "jorge", nombre: "Jorge", foto: "https://via.placeholder.com/150" },
    { id: "cristian", nombre: "Cristian", foto: "https://via.placeholder.com/150" },
  ];

  return (
    <header id="inicio" className="header-container">
      <h1 className="header-title">Grupo 7</h1>
      <div className="card-container">
        {integrantes.map((integrante) => (
          <a href={`#${integrante.id}`} key={integrante.id} className="card">
            <h3>{integrante.nombre}</h3>
            <img src={integrante.foto} alt={integrante.nombre} />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
