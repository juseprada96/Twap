import { Component, OnInit } from '@angular/core';
import { PlanDocencia } from '../../models/plan-docencia';

@Component({
  selector: 'app-formulario-docencia',
  templateUrl: './formulario-docencia.component.html',
  styleUrls: ['./formulario-docencia.component.css']
})
export class FormularioDocenciaComponent implements OnInit {

  planDocencia: PlanDocencia;

  constructor() { 
    this.planDocencia = new PlanDocencia();
    this.planDocencia.asignaturas = [];
    this.planDocencia.proyectosUno = [];
    this.planDocencia.proyectosDos = [];
    this.planDocencia.semilleros = [];
    this.planDocencia.totalHoras = 320;
  }

  ngOnInit() {
  }

  guardar(){
    let p = PlanDocencia
  }
}
