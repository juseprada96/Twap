import {Component, Input, OnInit} from '@angular/core';
import {ProyectoInvestigacion} from '../../models/proyecto-investigacion';

@Component({
  selector: 'app-formulario-proyecto-investigacion',
  templateUrl: './formulario-proyecto-investigacion.component.html',
  styleUrls: ['./formulario-proyecto-investigacion.component.css']
})
export class FormularioProyectoInvestigacionComponent implements OnInit {

  @Input() proyectos: ProyectoInvestigacion[];
  proyecto: ProyectoInvestigacion;

  constructor() {
    this.proyecto = new ProyectoInvestigacion;
  }

  agregarProyecto() {
    if(this.proyecto.nombreProyecto.trim()){
    let p = new ProyectoInvestigacion;
    p.nombreProyecto = this.proyecto.nombreProyecto;
    this.proyectos.push(p);
    this.proyecto = new ProyectoInvestigacion();
    } else {
      alert("El nombre no puede ser vacio")
    }
  }

  eliminarProyecto(event: ProyectoInvestigacion) {

    let index = this.proyectos.findIndex(proyecto => proyecto == event);
    this.proyectos.splice(index, 1);
  }

  ngOnInit() {
  }


}
