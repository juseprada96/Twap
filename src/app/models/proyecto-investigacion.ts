import {Actividad} from './actividad';
import {RolProyecto} from './rol-proyecto';

export class ProyectoInvestigacion {
  idProyectoInvestigacion: string;
  nombreProyecto: string;
  tiempoTotal: number;
  centroCostos: string;
  rolProyecto: string;
  actividadesProyecto: Actividad[];
}
