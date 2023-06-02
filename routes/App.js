import { Nav } from "../layout/Nav.js"
import { Footer } from "../layout/Footer.js"
import { CrearEstudiante } from "../pages/CrearEstudiante.js"
import { Error404 } from "../pages/Error404.js"
import { PaginaPrincipal } from "../pages/PaginaPrincipal.js"
import { Matriculado } from "../pages/Matriculado.js"
import { EstudianteDetalle } from "../pages/EstudianteDetalle.js"
import { InciarSesion } from "../pages/IniciarSesion.js"

import getHash from "../connections/helpers/getHash.js"
import resolverRutas from "../connections/helpers/resolverRutas.js"



const  Rutas={
    "/": InciarSesion,
    "/crearestudiante":CrearEstudiante,
    "/detalleestudiante": EstudianteDetalle,
    "/matriculados": Matriculado

    
}



const App= async ()=>{

    const header= document.querySelector("header")
    const main= document.querySelector("main")
    const footer= document.querySelector("footer")

    header.innerHTML= await Nav()

    footer.innerHTML= await Footer()

    let ruta=  await resolverRutas(getHash())
 
 
    let pagina= (Rutas[ruta]) ? Rutas[ruta] : Error404 

     main.innerHTML= await pagina() 


}



export { App }