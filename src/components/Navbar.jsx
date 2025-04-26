import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#lucas">PAULO</a></li>
        <li><a href="#luciana">SANTIAGO</a></li>
        <li><a href="#julieta">JOSE</a></li>
        <li><a href="#jorge">LEONARDO</a></li>
        <li><a href="#cristian">SANTIAGO</a></li>
        <li><a href="#agregar">AGREGAR</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
