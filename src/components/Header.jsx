import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 id="inicio">Grupo 7</h1>
      <nav>
        <ul className="nav">
          <li><a href="#inicio">Inicio</a></li>
          {[...Array(5)].map((_, i) => (
            <li key={i}><a href={`#integrante-${i + 1}`}>Integrante {i + 1}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
