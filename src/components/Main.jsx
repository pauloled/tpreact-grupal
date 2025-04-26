import React, { useState } from 'react';
import Nosotros from './Nosotros';
import '../styles/Main.css';

const Main = ({ integrantes }) => {
  const [grupo, setGrupo] = useState(integrantes);

  const [nuevoIntegrante, setNuevoIntegrante] = useState({
    nombre: '',
    apellido: '',
    legajo: '',
    github: '',
    foto: '',
  });

  const handleChange = (e) => {
    setNuevoIntegrante({
      ...nuevoIntegrante,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nuevoIntegrante.nombre &&
      nuevoIntegrante.apellido &&
      nuevoIntegrante.legajo &&
      nuevoIntegrante.github &&
      nuevoIntegrante.foto
    ) {
      setGrupo([...grupo, nuevoIntegrante]);
      setNuevoIntegrante({
        nombre: '',
        apellido: '',
        legajo: '',
        github: '',
        foto: '',
      });

      // 🚨 🚨 🚨 ALERT que pediste
      setTimeout(() => {
        alert("✅ Integrante agregado exitosamente");
      }, 100); // pequeño retardo para que no corte el flujo del form
    }
  };

  return (
    <main className="main-container">
      <Nosotros integrantes={grupo} />

      <section id="agregar" className="form-section">
        <h2>Agregar Nuevo Integrante</h2>
        <form onSubmit={handleSubmit} className="form-agregar">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoIntegrante.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={nuevoIntegrante.apellido}
            onChange={handleChange}
          />
          <input
            type="text"
            name="legajo"
            placeholder="Legajo"
            value={nuevoIntegrante.legajo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub (URL)"
            value={nuevoIntegrante.github}
            onChange={handleChange}
          />
          <input
            type="text"
            name="foto"
            placeholder="Foto (URL)"
            value={nuevoIntegrante.foto}
            onChange={handleChange}
          />
          <button type="submit">Agregar</button>
        </form>
      </section>
    </main>
  );
};

export default Main;
