// Nombre: [Tus nombres y legajos]
// Ejemplo:
// Pablo Díaz - 12345
// Juan Gómez - 67890

import "./styles/App.css";
import HomePages from "./pages/Homepages";

function App() {
  const integrantes = [
    {
      id: "paulo",
      nombre: "Paulo",
      apellido: "Ledesma",
      legajo: "12345",
      github: "https://github.com/lucasgonzalez",
      foto: "https://via.placeholder.com/200"
    },
    {
      id: "luciana",
      nombre: "Luciana",
      apellido: "Martínez",
      legajo: "23456",
      github: "https://github.com/lucianamartinez",
      foto: "https://via.placeholder.com/200"
    },
    {
      id: "julieta",
      nombre: "Julieta",
      apellido: "Fernández",
      legajo: "34567",
      github: "https://github.com/julietafernandez",
      foto: "https://via.placeholder.com/200"
    },
    {
      id: "jorge",
      nombre: "Jorge",
      apellido: "Pérez",
      legajo: "45678",
      github: "https://github.com/jorgeperez",
      foto: "https://via.placeholder.com/200"
    },
    {
      id: "cristian",
      nombre: "Cristian",
      apellido: "Lopez",
      legajo: "56789",
      github: "https://github.com/cristianlopez",
      foto: "https://via.placeholder.com/200"
    },
  ];

  return (
    <div className="App">
      <HomePages integrantes={integrantes} />
    </div>
  );
}

export default App;
