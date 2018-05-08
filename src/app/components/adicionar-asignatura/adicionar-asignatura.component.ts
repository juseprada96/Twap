import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Asignatura} from '../../models/asignatura';
import {Grupo} from '../../models/grupo';
@Component({
  selector: 'app-adicionar-asignatura',
  templateUrl: './adicionar-asignatura.component.html',
  styleUrls: ['./adicionar-asignatura.component.css']
})
export class AdicionarAsignaturaComponent implements OnInit {

  @Input() asignatura : Asignatura;
  @Output() eventoEliminar = new EventEmitter<Asignatura>()

  eliminarAsignatura(){
    this.eventoEliminar.emit(this.asignatura);
  }

  /*asignatura: Asignatura = {
    idAsignatura: '1',
    nombreAsignatura: 'Principios Fisico Quimica',
    NRC: '26123',
    creditos: 4,
    numeroEstudiantes: 25
  }*/

  agregarGrupo(){
    let g = new Grupo();
    g.numeroGrupo = this.asignatura.grupos.length + 1;
    this.asignatura.grupos.push(g);
  }

  eliminarGrupo(numeroGrupo:number){
    let index = this.asignatura.grupos.findIndex(grupo => grupo.numeroGrupo == numeroGrupo)
    this.asignatura.grupos.splice(index,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
