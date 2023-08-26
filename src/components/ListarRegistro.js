import React from 'react';

function listarRegistro(props) {
  console.log("props en ListarRegistro ==> ", props.listarInformacionEstudios);
  return (
    <div>
      {props.listarInformacionEstudios.map(item => 
        <div>
          <p>{item.categoria}</p>
          <p>{item.lugarDeFormacion}</p>
          <p>{item.tituloEstudio}</p>
          <p>{item.fechaInicio}</p>
          <p>{item.fechaFin}</p>
        </div>
      )}
    </div>
  );
}
export default listarRegistro;