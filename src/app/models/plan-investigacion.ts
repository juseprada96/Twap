import {ProyectoInvestigacion} from './proyecto-investigacion';
import {PropuestaInvestigacion} from './propuesta-investigacion';

export class PlanInvestigacion {
  idPlanInvestigacion: string;
  horasDedicadas: number;
  numeroProyectos: number;
  proyectosInvestigacion: ProyectoInvestigacion[];
  propuestaInvestagacion: PropuestaInvestigacion;
}
