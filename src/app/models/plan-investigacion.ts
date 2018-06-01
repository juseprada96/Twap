import {ProyectoInvestigacion} from './proyecto-investigacion';
import {PropuestaInvestigacion} from './propuesta-investigacion';
import {ProyectoGrado} from './proyecto-grado';
import {JovenInvestigador} from './joven-investigador';

export class PlanInvestigacion {
  idPlanInvestigacion: string;
  horasDedicadas: number;
  numeroProyectos: number;
  proyectosInvestigacion: ProyectoInvestigacion[];
  propuestaInvestagacion: PropuestaInvestigacion[];
  jovenes: JovenInvestigador[];
}
