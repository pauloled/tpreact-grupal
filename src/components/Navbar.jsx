import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#lucas">Integrante 1</a></li>
        <li><a href="#luciana">Integrante 2</a></li>
        <li><a href="#julieta">Integrante 3</a></li>
        <li><a href="#jorge">Integrante 4</a></li>
        <li><a href="#cristian">Integrante 5</a></li>
        <li><a href="#agregar">Agregar</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
