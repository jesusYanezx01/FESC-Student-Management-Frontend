
const crearestudianteFormulario= ()=>{
    return (`
    <form id="myForm" class="formEstudiante">
        <div class="mb-3 mb-lg-3">
            <label for="nombre" class="form-label">Nombres</label>
            <input type="text" class="form-control" id="nombre" required>
        </div>
        <div class="mb-3">
            <label for="tipoDocumento" class="form-label">Tipo de documento de identificacion</label>
            <select class="form-select" aria-label="Default select example" required>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Tarjeta de identidad</option>
                <option value="3">Cedula de extranjeria</option>
                <option value="4">Otro...</option>
              </select>
        </div>

        <div class="mb-3">
            <label for="identificacion" class="form-label">Documento de identificacion</label>
            <input type="text" class="form-control" id="identificacion" required>
        </div>

        <div class="mb-3">
            <label for="sexo" class="form-label">Sexo</label>
            <select class="form-select" aria-label="Default select example" required>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro...</option>
               
              </select>

        </div>
        
        <div class="mb-3">
            <label for="telefono" class="form-label">Telefono</label>
            <input type="text" class="form-control" id="telefono" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="email" required>
        </div>
        

        <div class="mb-3">
            <label for="carrera" class="form-label">Programa academico</label>
            <select class="form-select" aria-label="Default select example" required>
                <option value="1">Diseño grafico</option>
                <option value="2">Diseño de modas</option>
                <option value="3">Hotelería y turísmo</option>
                <option value="4">Ingeniería de software</option>
                <option value="5">Negocios internacionales</option>
                <option value="6">Negocios internacionales - Distancia</option>
                <option value="7">Administracion financiera</option>
                <option value="9">Logística empresarial</option>
              </select>

        </div>
        <div class="mb-3">
            <label for="observacion" style="margin-bottom: 6px ;">Observacion del estudiante</label>
            <textarea class="form-control" placeholder="Escribas sus observaciones aquí" id="observacion" style="height: 100px" required></textarea>
              

        </div>
        
        <button type="submit" class="btn btn-success" ">Registrar</button>
    </form>
    
    
    `)
}

 export{crearestudianteFormulario}