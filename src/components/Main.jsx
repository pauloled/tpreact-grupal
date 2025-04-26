import React, { useState } from 'react';
import '../styles/Cards.css';

const Main = ({ integrantes }) => {
  const [grupo] = useState([...integrantes]);

  return (
    <main>
      <section className="cards-container">
        {grupo.map((int, i) => (
          <a href={`#integrante-${i + 1}`} key={i} className="card">
            <h3>{int.nombre}</h3>
            <img src={int.foto} alt={`${int.nombre}`} />
          </a>
        ))}
      </section>

      {grupo.map((int, i) => (
        <section key={i} id={`integrante-${i + 1}`} className="integrante-container" style={{ backgroundColor: int.color }}>
          <h2>{int.nombre} {int.apellido}</h2>
          <p><strong>Legajo:</strong> {int.legajo}</p>
          <p><strong>GitHub:</strong> <a href={int.github} target="_blank" rel="noreferrer">{int.github}</a></p>
        </section>
      ))}
    </main>
  );
};

export default Main;
