import { Semillero } from "./semillero";
import { Asignatura } from "./asignatura";

export class PlanDocencia {
    idPlanDocencia: string;
    distribucionHoras: number;
    totalHoras: number;
    semilleros: Semillero[];
    asignaturas: Asignatura[];
}
