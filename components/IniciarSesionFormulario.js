

const IniciarSesionFormulario= ()=>{
    return(`
    <form class="myForm">
        <div class="input-group mb-3 input-user">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="basic-addon1">
        </div>
    
        <div class="input-group mb-3 input-contra">
            <span class="input-group-text" id="basic-addon1">***</span>
            <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon1">
        </div>
    
        <button type="submit" class="btn btn-success">Ingresar</button>
    </form>

    `)
}

export {IniciarSesionFormulario}