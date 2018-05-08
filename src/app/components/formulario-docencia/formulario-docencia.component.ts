<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { PlanDocencia } from '../../models/plan-docencia';
=======
import {Component, OnInit} from '@angular/core';
import {PlanDocencia} from '../../models/plan-docencia';
>>>>>>> 3d8a4151da5dd9eaa8adb19d8fb0d9eecaa9043c

@Component({
  selector: 'app-formulario-docencia',
  templateUrl: './formulario-docencia.component.html',
  styleUrls: ['./formulario-docencia.component.css']
})
export class FormularioDocenciaComponent implements OnInit {

 @Input() planDocencia: PlanDocencia;


  ngOnInit() {
    this.planDocencia = new PlanDocencia();
    this.planDocencia.asignaturas = [];
    this.planDocencia.proyectosUno = [];
    this.planDocencia.proyectosDos = [];
    this.planDocencia.semilleros = [];
    this.planDocencia.totalHoras = 320;
  }
  constructor() {
    
  }

  
}
