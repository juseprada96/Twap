import { PlanAdministracion } from "./plan-administracion";
import { PlanInvestigacion } from "./plan-investigacion";
import { PlanDocencia } from "./plan-docencia";

export class PlanTrabajo {
    idPlanTrabajo: string;
    fechaInicio: Date;
    fechaFin: Date;
    planAdministracion: PlanAdministracion;
    planInvestigacion: PlanInvestigacion;
    planDocencia: PlanDocencia;
}
