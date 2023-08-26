import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const navbar = (props) => {
  const functionWallet = props.conectarWallet;
  //const cuentaNumero = props.conectarWallet;
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          BLADIMIR
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Balance en coin: {props.mostrasBalance}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Cuenta: {props.mostrarCuenta}
              </a>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary" onClick={functionWallet}>
          Conectar wallet
        </button>
      </div>
    </nav>
  );
};

export default navbar;