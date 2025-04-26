import React, { useState } from 'react';
import '../styles/Nosotros.css';

const Nosotros = ({ grupo, agregarIntegrante }) => {
  const [nuevo, setNuevo] = useState({
    nombre: '', apellido: '', edad: '', legajo: '', github: '', foto: ''
  });

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarIntegrante(nuevo);
    setNuevo({ nombre: '', apellido: '', edad: '', legajo: '', github: '', foto: '' });
  };

  return (
    <section id="integrantes" className="nosotros">
      <h2>Integrantes</h2>
      <div className="tarjetas">
        {grupo.map((int, index) => (
          <div key={index} className="tarjeta" id={int.nombre.toLowerCase()}>
            <h3>{int.nombre} {int.apellido}</h3>
            <img src={int.foto} alt={int.nombre} />
            <p>Legajo: {int.legajo}</p>
            <a href={int.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        ))}
      </div>
      <section id="formulario" className="formulario">
        <h3>Agregar nuevo integrante</h3>
        <form onSubmit={handleSubmit}>
          <input name="nombre" placeholder="Nombre" onChange={handleChange} value={nuevo.nombre} required />
          <input name="apellido" placeholder="Apellido" onChange={handleChange} value={nuevo.apellido} required />
          <input name="edad" type="number" placeholder="Edad" onChange={handleChange} value={nuevo.edad} required />
          <input name="legajo" placeholder="Legajo" onChange={handleChange} value={nuevo.legajo} required />
          <input name="github" placeholder="GitHub URL" onChange={handleChange} value={nuevo.github} required />
          <input name="foto" placeholder="URL de la Foto" onChange={handleChange} value={nuevo.foto} required />
          <button type="submit">Agregar</button>
        </form>
      </section>
    </section>
  );
};

export default Nosotros;
