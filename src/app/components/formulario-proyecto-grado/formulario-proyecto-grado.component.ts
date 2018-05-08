import {Component, Input, OnInit} from '@angular/core';
import {ProyectoGrado} from '../../models/proyecto-grado';

@Component({
  selector: 'app-formulario-proyecto-grado',
  templateUrl: './formulario-proyecto-grado.component.html',
  styleUrls: ['./formulario-proyecto-grado.component.css']
})
export class FormularioProyectoGradoComponent implements OnInit {


  @Input() proyectos: ProyectoGrado[];
  proyecto: ProyectoGrado;

  constructor() {
    this.proyecto = new ProyectoGrado;
  }

  agregarProyecto() {
    let p = new ProyectoGrado;
    p.nombre = this.proyecto.nombre;
    p.numeroProyecto = this.proyectos.length + 1;
    p.estudiantes = [];
    this.proyectos.push(p);
    this.proyecto = new ProyectoGrado();
  }

  eliminarProyecto(event: ProyectoGrado) {
    console.log(event);
    let index = this.proyectos.findIndex(proyecto => proyecto.numeroProyecto == event.numeroProyecto);
    this.proyectos.splice(index, 1);
  }

  ngOnInit() {
  }

}
