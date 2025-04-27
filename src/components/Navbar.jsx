import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#paulo">PAULO</a></li>
        <li><a href="#santiago">SANTIAGO</a></li>
        <li><a href="#jose">JOSE</a></li>
        <li><a href="#leonardo">LEONARDO</a></li>
        <li><a href="#cristian">SANTIAGO</a></li>
        <li><a href="#agregar">AGREGAR</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
