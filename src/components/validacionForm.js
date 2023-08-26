
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    let lugarFormacion = document.getElementById("lugarFormacion").value;
    let categoria = document.getElementById("categoria").value;
    let titulo = document.getElementById("titulo").value;
    let fechaInicio = document.getElementById("fechaInicio").value;
    let fechaFinalizacion = document.getElementById("fechaFinalizacion").value;

    let alerta = document.getElementById("alerta");

    if (!/^[a-zA-Z\s]*$/.test(lugarFormacion)) {
        alerta.textContent = "El lugar de formación solo puede contener letras";
        return;
    }

    if (!/^[a-zA-Z\s]*$/.test(categoria)) {
        alerta.textContent = "La categoría solo puede contener letras";
        return;
    }

    if (!/^[a-zA-Z\s]*$/.test(titulo)) {
        alerta.textContent = "El título solo puede contener letras";
        return;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaInicio)) {
        alerta.textContent = "La fecha de inicio debe ser una fecha válida";
        return;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaFinalizacion)) {
        alerta.textContent = "La fecha de finalización debe ser una fecha válida";
        return;
    }

    alerta.textContent = "";

    console.log({
        lugarFormacion: lugarFormacion,
        categoria: categoria,
        titulo: titulo,
        fechaInicio: fechaInicio,
        fechaFinalizacion: fechaFinalizacion
    });
});