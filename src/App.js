// Integrantes:
// Juan Pérez - Legajo 12345
// Ana Gómez - Legajo 23456
// Pedro Díaz - Legajo 34567
// Lucía Torres - Legajo 45678
// Martín Ruiz - Legajo 56789

import React, { useState } from 'react';
import HomePages from './pages/Homepages';
import './styles/App.css';

function App() {
  const nombre = "Pablo";
  const persona = {
    nombre: 'Carlos',
    edad: 20,
    curso: 'programación',
    Asistencia: false,
  };

  const [grupo, setGrupo] = useState([
    { nombre: 'Lucas', edad: 25, apellido: "Martínez", legajo: "10001", github: "https://github.com/lucas", foto: "https://via.placeholder.com/100" },
    { nombre: 'Luciana', edad: 19, apellido: "Fernández", legajo: "10002", github: "https://github.com/luciana", foto: "https://via.placeholder.com/100" },
    { nombre: 'Julieta', edad: 26, apellido: "Rodríguez", legajo: "10003", github: "https://github.com/julieta", foto: "https://via.placeholder.com/100" },
    { nombre: 'Jorge', edad: 30, apellido: "Pérez", legajo: "10004", github: "https://github.com/jorge", foto: "https://via.placeholder.com/100" },
    { nombre: 'Cristian', edad: 30, apellido: "García", legajo: "10005", github: "https://github.com/cristian", foto: "https://via.placeholder.com/100" }
  ]);

  const agregarIntegrante = (nuevoIntegrante) => {
    setGrupo([...grupo, nuevoIntegrante]);
  };

  return (
    <div className="App">
      <HomePages
        nombre={nombre}
        persona={persona}
        grupo={grupo}
        agregarIntegrante={agregarIntegrante}
      />
    </div>
  );
}

export default App;
