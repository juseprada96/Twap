import {Semillero} from './semillero';
import {Asignatura} from './asignatura';
import {ProyectoGrado} from './proyecto-grado';

export class PlanDocencia {
  idPlanDocencia: string;
  distribucionHoras: number;
  totalHoras: number;
  semilleros: Semillero[];
  asignaturas: Asignatura[];
  proyectosUno: ProyectoGrado[];
  proyectosDos: ProyectoGrado[];
}
