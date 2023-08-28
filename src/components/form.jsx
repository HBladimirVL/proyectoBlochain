import React, { useState } from "react";

//import React from "react";

function Form(props) {
  const [inicialEstadoFormulario, setinicialEstadoFormulario] = useState({
    lugar: "",
    categoria: "",
    titulo: "",
    fechaInicio: "",
    fechaFin: "",
  });

  const [formulario, setFormulario] = useState(inicialEstadoFormulario);

  const ManejarFormulario = ({ target: { name, value } }) => {
    console.log(name, value);
    setFormulario({ ...formulario, [name]: value });
  };

  const registrarInformacion = async (event) => {
    event.preventDefault();
    //console.log(formulario.lugar);
    //console.log(formulario.categoria);
    //console.log(formulario.titulo);
    ///console.log(formulario.fechaInicio);
    ///console.log(formulario.fechaFin);

    try {
      const result = await props.contrato.methods.crearRegistro(
          formulario.categoria,
          formulario.fechaInicio,
          formulario.fechaFin,
          formulario.lugar,
          formulario.titulo
        )
        .send({ from: props.direccion });
      console.log(result);
    } catch (error) {
      console.error(error);
      //errorTransacion()
    }
  };

  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-0.5"></div>

        <div class="col-sm-6">
          <br />
          <br />
          <p class="h1"> Formulario</p>
          <form onSubmit={registrarInformacion} id="miFormulario">
            <div class="mb-3">
              <label for="lugarFormacion" class="form-label">
                Lugar de formación
              </label>
              <input
                type="text"
                class="form-control"
                onChange={ManejarFormulario}
                name="lugar"
                id="lugar"
                value={formulario.lugar}
              />
              {formulario.lugar.length >= 8 ? "" : "Campo requerido"}
            </div>
            <div class="mb-3">
              <label for="categoria" class="form-label">
                Categoría
              </label>
              <input
                type="text"
                class="form-control"
                onChange={ManejarFormulario}
                name="categoria"
                id="categoria"
                value={formulario.categoria}
              />
            </div>
            <div class="mb-3">
              <label for="titulo" class="form-label">
                Título
              </label>
              <input
                type="text"
                class="form-control"
                onChange={ManejarFormulario}
                name="titulo"
                id="titulo"
                value={formulario.titulo}
              />
            </div>
            <div class="mb-3">
              <label for="fechaInicio" class="form-label">
                Fecha de inicio
              </label>
              <input
                type="date"
                class="form-control"
                onChange={ManejarFormulario}
                name="fechaInicio"
                id="fechaInicio"
                value={formulario.fechaInicio}
              />
            </div>
            <div class="mb-3">
              <label for="fechaFinalizacion" class="form-label">
                Fecha de finalización
              </label>
              <input
                type="date"
                class="form-control"
                onChange={ManejarFormulario}
                name="fechaFin"
                id="fechaFin"
                value={formulario.fechaFin}
              />
            </div>
            <span id="alerta"></span>
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>

        <div class="col-sm-0.5"></div>
      </div>
    </div>
  );
}

export default Form;
