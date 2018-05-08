import {Actividad} from './actividad';

export class ProyectoInvestigacion {
  idProyectoInvestigacion: string;
  nombreProyecto: string;
  tiempoTotal: number;
  centroCostos: string;
  rolProyecto: string;
  actividadesProyecto: Actividad[];
}
