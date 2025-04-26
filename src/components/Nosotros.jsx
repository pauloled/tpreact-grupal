import React from "react";
import "../styles/Nosotros.css";

const Nosotros = ({ integrantes }) => {
  return (
    <section className="nosotros-container">
      {integrantes.map((integrante, index) => (
        <div id={integrante.id} className="integrante-section" key={index}>
          <h2>{integrante.nombre} {integrante.apellido}</h2>
          <img src={integrante.foto} alt={integrante.nombre} />
          <p>Legajo: {integrante.legajo}</p>
          <a href={integrante.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      ))}
    </section>
  );
};

export default Nosotros;
