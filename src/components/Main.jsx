import React from 'react';
import Nosotros from './Nosotros';
import '../styles/Main.css';

const Main = ({ nombre, persona, grupo, agregarIntegrante }) => {
  return (
    <main className="main">
      <section className="bienvenida">
        <h2>Hola, {nombre}</h2>
        <ul>
          <li>Nombre: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Curso: {persona.curso}</li>
          <li>Asistencia: {persona.Asistencia ? "Presente" : "Ausente"}</li>
        </ul>
      </section>
      <Nosotros grupo={grupo} agregarIntegrante={agregarIntegrante} />
    </main>
  );
};

export default Main;
