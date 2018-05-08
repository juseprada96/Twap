import {Actividades} from './actividades';
import {RolProyecto} from './rol-proyecto';

export class ProyectoInvestigacion {
  idProyectoInvestigacion: string;
  centroCostos: string;
  rolProyecto: RolProyecto;
  actividadesProyecto: Actividades;
}
