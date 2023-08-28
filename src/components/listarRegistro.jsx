import React from 'react';

function listarRegistro(props) {
  console.log("props en listarRegistro ==>", props.listarInformacionEstudios);
  return (
    <div class="container">
      {props.listarInformacionEstudios.map((item) => (
        <div class="row row-cols-5">

            <p>{item.categoria}</p>
            <p>{item.lugarDeFormacion}</p>
            <p>{item.tituloEstudio}</p>
            <p>{item.fechaInicio}</p>
            <p>{item.fechaFin}</p>
          
        </div>
      ))}
    </div>
  );
}

export default listarRegistro;
