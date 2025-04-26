// NOMBRE - LEGAJO
// Paulo ledesma - 61035
// Santiago Ledesma - 61115
// Jose Quiroga - 61033
// Leonardo Ramirez - 61084
// Santiago Navarro - 61205

import "./styles/App.css";
import HomePages from "./pages/Homepages";
import paulo_foto from './assets/paulo_foto.jpg';
import santi_foto from './assets/santi_foto.jpg';

function App() {
  const integrantes = [
    {
      id: "Paulo",
      nombre: "Paulo",
      apellido: "Ledesma",
      legajo: "61035",
      github: "https://github.com/pauloled",
      foto: paulo_foto
    },
    {
      id: "Santiago",
      nombre: "Santiago",
      apellido: "Ledesma",
      legajo: "61115",
      github: "https://github.com/santled",
      foto: santi_foto
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
