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
import leo_foto from './assets/leo_foto.jpg'; 
import imagenjq2 from './assets/imagenjq2.jpg'; 

function App() {
  const integrantes = [
    {
      id: "paulo",
      nombre: "Paulo",
      apellido: "Ledesma",
      legajo: "61035",
      github: "https://github.com/pauloled",
      foto: paulo_foto
    },
    {
      id: "santiago",
      nombre: "Santiago",
      apellido: "Ledesma",
      legajo: "61115",
      github: "https://github.com/santled",
      foto: santi_foto
    },
    {
      id: "jose",
      nombre: "Jose",
      apellido: "Quiroga",
      legajo: "61033",
      github: "https://github.com/jose-qui",
      foto: imagenjq2
    },
    {
      id: "leonardo",
      nombre: "Leonardo",
      apellido: "Ramirez",
      legajo: "61084",
      github: "https://github.com/leoramirez777",
      foto: leo_foto
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
