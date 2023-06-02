import getData from "../connections/helpers/getEstudiante.js";
import { EstudianteverTarjetas } from "../components/EstudianteverTarjetas.js";

const EstudianteDetalle = async () => {
  try {
    const estudiantes = await getData();
    const tarjetasEstudiantes = EstudianteverTarjetas(estudiantes);

    return `
      
          <div class="cards-deatalleEstudiante">
            <div class="card-body">
              <h3 class="text-center">Ver Estudiantes</h3>
              ${tarjetasEstudiantes}
            </div>
          </div>
        
    `;
  } catch (error) {
    console.error("Error al obtener los estudiantes:", error);
    return "";
  }
};

export { EstudianteDetalle };


