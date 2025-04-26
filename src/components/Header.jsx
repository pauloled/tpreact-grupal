import React from "react";
import "../styles/Header.css";
import paulo_foto from '../assets/paulo_foto.jpg';
import santi_foto from '../assets/santi_foto.jpg';

const Header = () => {
  const integrantes = [
    { id: "paulo", nombre: "Paulo", foto: paulo_foto },
    { id: "luciana", nombre: "Santiago", foto: santi_foto },
    { id: "julieta", nombre: "Jose", foto: "https://via.placeholder.com/150" },
    { id: "jorge", nombre: "Leonardo", foto: "https://via.placeholder.com/150" },
    { id: "cristian", nombre: "Santiago", foto: "https://via.placeholder.com/150" },
  ];

  return (
    <header id="inicio" className="header-container">
      <h1 className="header-title">Grupo 7</h1>
      <div className="card-container">
        {integrantes.map((integrante) => (
          <a href={`#${integrante.id}`} key={integrante.id} className="card">
            <h3>{integrante.nombre}</h3>
            <img src={integrante.foto} alt={`Foto de ${integrante.nombre}`} className="foto-integrante" />
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
