import { crearestudianteFormulario } from "../components/CrearEstudianteFormulario.js"

const CrearEstudiante= ()=>{
    return(`

    <div class="container mt-3 mb-3">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
            <div class="card position-relative" style="z-index: 2;">
                <div class="card-body">
                    <h2 class="text-center mb-4" style="margin-top: 30px;">CREAR ESTUDIANTE</h2>
                        
                ${crearestudianteFormulario()}
                  </div>
                </div>
            </div>
        </div>
    </div>
        
        `)
}

export { CrearEstudiante }