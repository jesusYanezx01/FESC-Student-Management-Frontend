

const Nav= ()=>{
    return(
        `
        <nav class="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
            <div class="container-fluid bg-body-tertiary navsibies">
                <a class="navbar-brand" href="#">SIBIES</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto custom-nav"> <!-- Agregar clase personalizada "custom-nav" -->
                        <li class="nav-item">
                            <a class="nav-link" href="/">Iniciar sesión</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Estudiantes
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#/crearestudiante/">Crear Estudiantes</a></li>
                                <li><a class="dropdown-item" href="#/detalleestudiante">Ver Estudiantes</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/matriculados/">Matriculados</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menú
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Cerrar Sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        `)


}

export {Nav}