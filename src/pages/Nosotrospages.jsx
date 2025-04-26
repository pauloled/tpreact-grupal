import React from 'react';
import Nosotros from '../components/Nosotros';

const NosotrosPages = ({ grupo, agregarIntegrante }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Conocé al Grupo</h2>
      <Nosotros grupo={grupo} agregarIntegrante={agregarIntegrante} />
    </div>
  );
};

export default NosotrosPages;
