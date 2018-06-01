import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProyectoGrado} from '../../models/proyecto-grado';
import {Estudiante} from '../../models/estudiante';

@Component({
  selector: 'app-adicionar-proyecto-grado',
  templateUrl: './adicionar-proyecto-grado.component.html',
  styleUrls: ['./adicionar-proyecto-grado.component.css']
})
export class AdicionarProyectoGradoComponent implements OnInit {


  @Input() proyecto: ProyectoGrado;

  @Output() eventoEliminar = new EventEmitter<ProyectoGrado>();

  eliminarProyecto() {
    this.eventoEliminar.emit(this.proyecto);
  }

  agregarEstudiante() {
    let e = new Estudiante();
    this.proyecto.estudiantes.push(e);
  }

  eliminarEstudiante(codigo: string) {
    let index = this.proyecto.estudiantes.findIndex(estudiante => estudiante.codigo === codigo);
    this.proyecto.estudiantes.splice(index, 1);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
