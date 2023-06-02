import getData from "../connections/helpers/getEstudiante.js";
import { MatriculadoteverTarjeta } from "../components/MatriculadoverTarjeta.js";

const Matriculado = async () => {
    try {
      const estudiantes = await getData();
      const tarjetasMatriculado = MatriculadoteverTarjeta(estudiantes);
  
      return `
        
            <div class="cards-deatalleEstudiante">
              <div class="card-body">
                <h3 class="text-center">Ver Estudiantes Matriculados</h3>
                ${tarjetasMatriculado}
              </div>
            </div>
          
      `;
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
      return "";
    }
  };

export { Matriculado }