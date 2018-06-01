import {Component, Input, OnInit} from '@angular/core';
import {PlanInvestigacion} from '../../models/plan-investigacion';

@Component({
  selector: 'app-formulario-investigacion',
  templateUrl: './formulario-investigacion.component.html',
  styleUrls: ['./formulario-investigacion.component.css']
})
export class FormularioInvestigacionComponent implements OnInit {

  @Input() planInvestigacion: PlanInvestigacion;

  constructor() {
  }

  ngOnInit() {
    this.planInvestigacion.propuestaInvestagacion = [];
    this.planInvestigacion.proyectosInvestigacion = [];
    this.planInvestigacion.jovenes = [];
  }

}
