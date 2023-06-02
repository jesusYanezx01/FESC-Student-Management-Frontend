
function EstudianteverTarjetas(estudiantes) {
  let tarjetasHTML = "";

  for (let i = 0; i < estudiantes.length; i += 3) {
    tarjetasHTML += `
      <div class="row">
    `;

    for (let j = i; j < i + 3; j++) {
      if (j < estudiantes.length) {
        const estudiante = estudiantes[j];

        tarjetasHTML += `
          <div class="col-md-4">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${estudiante.nombre}</h5>
                <p class="card-text"><strong>Documento:</strong> ${estudiante.documento}</p>
                <p class="card-text"><strong>Sexo:</strong> ${estudiante.sexo}</p>
                <p class="card-text"><strong>Teléfono:</strong> ${estudiante.telefono}</p>
                <p class="card-text"><strong>Email:</strong> ${estudiante.correo}</p>
                <p class="card-text"><strong>Programa:</strong> ${estudiante.programa}</p>
                <p class="card-text"><strong>Observación:</strong> ${estudiante.observacion}</p>
              </div>
            </div>
          </div>
        `;
      }
    }

    tarjetasHTML += `
      </div>
    `;
  }

  return tarjetasHTML;
}

export { EstudianteverTarjetas };





