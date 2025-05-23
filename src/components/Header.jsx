import React from "react";
import "../styles/Header.css";
import paulo_foto from '../assets/paulo_foto.jpg';
import santi_foto from '../assets/santi_foto.jpg';
import leo_foto from "../assets/leo_foto.jpg";
import imagenjq2 from '../assets/imagenjq2.jpg';


const Header = () => {
  const integrantes = [
    { id: "paulo", nombre: "Paulo", foto: paulo_foto },
    { id: "santiago", nombre: "Santiago", foto: santi_foto },
    { id: "jose", nombre: "Jose", foto: imagenjq2 },
    { id: "leonardo", nombre: "Leonardo", foto: leo_foto },
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
