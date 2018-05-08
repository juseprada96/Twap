import {ProyectoInvestigacion} from './proyecto-investigacion';
import {PropuestaInvestigacion} from './propuesta-investigacion';
import {ProyectoGrado} from './proyecto-grado';

export class PlanInvestigacion {
  idPlanInvestigacion: string;
  horasDedicadas: number;
  numeroProyectos: number;
  proyectosInvestigacion: ProyectoInvestigacion[];
  propuestaInvestagacion: PropuestaInvestigacion[];
  proyectosJovenes: ProyectoGrado[];
}
