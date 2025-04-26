// Integrantes:
// - Nombre Apellido - Legajo
// - Nombre Apellido - Legajo
// - Nombre Apellido - Legajo

import './styles/App.css';
import HomePages from './pages/Homepages';

function App() {
  const integrantes = [
    { nombre: "Juan", apellido: "Pérez", legajo: "12345", github: "https://github.com/juanperez", foto: "https://via.placeholder.com/150", color: "#ffe0e0" },
    { nombre: "María", apellido: "Gómez", legajo: "67890", github: "https://github.com/mariagomez", foto: "https://via.placeholder.com/150", color: "#e0f7ff" },
    { nombre: "Luis", apellido: "Rodríguez", legajo: "11223", github: "https://github.com/luisrodriguez", foto: "https://via.placeholder.com/150", color: "#e0ffe0" },
    { nombre: "Sofía", apellido: "Martínez", legajo: "44556", github: "https://github.com/sofiamartinez", foto: "https://via.placeholder.com/150", color: "#fff0e0" },
    { nombre: "Pedro", apellido: "López", legajo: "77889", github: "https://github.com/pedrolopez", foto: "https://via.placeholder.com/150", color: "#f0e0ff" }
  ];

  return <HomePages integrantes={integrantes} />;
}

export default App;