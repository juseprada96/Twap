import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProyectoInvestigacion} from '../../models/proyecto-investigacion';
import {Actividad} from '../../models/actividad';

@Component({
  selector: 'app-adicionar-proyecto-investigacion',
  templateUrl: './adicionar-proyecto-investigacion.component.html',
  styleUrls: ['./adicionar-proyecto-investigacion.component.css']
})
export class AdicionarProyectoInvestigacionComponent implements OnInit {

  @Input() proyecto: ProyectoInvestigacion;

  @Output() eventoEliminar = new EventEmitter<ProyectoInvestigacion>();

  eliminarProyecto() {
    this.eventoEliminar.emit(this.proyecto);
  }

  agregarActividad() {
    let e = new Actividad();
    e.idActividad = (this.proyecto.actividadesProyecto.length + 1).toString();
    this.proyecto.actividadesProyecto.push(e);
  }

  eliminarActividad(idActividad: string) {
    let index = this.proyecto.actividadesProyecto.findIndex(actividad => actividad.idActividad == idActividad);
    this.proyecto.actividadesProyecto.splice(index, 1);
  }

  constructor() {

  }

  ngOnInit() {
    this.proyecto.actividadesProyecto = [];
  }


}
