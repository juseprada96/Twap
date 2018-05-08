import {Actividades} from './actividades';
import {RolProyecto} from './rol-proyecto';

export class ProyectoInvestigacion {
  idProyectoInvestigacion: string;
  nombreProyecto: string;
  tiempoTotal: number;
  centroCostos: string;
  rolProyecto: RolProyecto;
  actividadesProyecto: Actividades[];
}
