import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProyectoInvestigacion } from '../../models/proyecto-investigacion';

@Component({
  selector: 'app-formulario-proyecto-investigacion',
  templateUrl: './formulario-proyecto-investigacion.component.html',
  styleUrls: ['./formulario-proyecto-investigacion.component.css']
})
export class FormularioProyectoInvestigacionComponent implements OnInit {

  @Input() proyectos: ProyectoInvestigacion[];
  proyecto: ProyectoInvestigacion;

  constructor() {
    this.proyectos = [];
    this.proyecto = new ProyectoInvestigacion;
  }

  agregarProyecto() {
    let p = new ProyectoInvestigacion;
    p.nombreProyecto = this.proyecto.nombreProyecto
    this.proyectos.push(p);
    this.proyecto = new ProyectoInvestigacion();
  }

  eliminarProyecto(event: ProyectoInvestigacion) {
    
    let index = this.proyectos.findIndex(proyecto => proyecto == event);
    this.proyectos.splice(index, 1);
  }

  ngOnInit() {
  }


}
