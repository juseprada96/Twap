import { Component, OnInit } from '@angular/core';
import {Asignatura} from '../../models/asignatura';
@Component({
  selector: 'app-adicionar-asignatura',
  templateUrl: './adicionar-asignatura.component.html',
  styleUrls: ['./adicionar-asignatura.component.css']
})
export class AdicionarAsignaturaComponent implements OnInit {

  asignatura: Asignatura = {
    idAsignatura: '1',
    nombreAsignatura: 'Principios Fisico Quimica',
    NRC: '26123',
    creditos: 4,
    numeroEstudiantes: 25
  }

  constructor() { }

  ngOnInit() {
  }

}
