import { IniciarSesionFormulario } from "../components/IniciarSesionFormulario.js"


const InciarSesion= ()=>{
    return(`

    <div class="container mt-3 mb-3">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="text-center mb-4" style="margin-top:30px">LOGIN SIBIES</h2>

                        ${IniciarSesionFormulario()}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 
    `)
}

export {InciarSesion}