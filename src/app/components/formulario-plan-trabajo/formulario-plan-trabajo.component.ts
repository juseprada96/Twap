import {Component, Input, OnInit} from '@angular/core';
import {PlanTrabajo} from '../../models/plan-trabajo';

@Component({
  selector: 'app-formulario-plan-trabajo',
  templateUrl: './formulario-plan-trabajo.component.html',
  styleUrls: ['./formulario-plan-trabajo.component.css']
})
export class FormularioPlanTrabajoComponent implements OnInit {

  @Input() planTrabajo: PlanTrabajo;

  periodos : string[];
  constructor() {
    this.periodos = [];
    let fecha = new Date();
    let periodo:string;
    for (let i = 0; i < 2; i++) {
        for(let j = 1; j <= 2 ; j++) {
          let year = fecha.getFullYear() + i;
          periodo = year + ' - ' + j;
          this.periodos.push(periodo);
        }
    }
  }

  ngOnInit() {
  }

}
