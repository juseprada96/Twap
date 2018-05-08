import { Component, OnInit, Input } from '@angular/core';
import { PlanTrabajo } from '../../models/plan-trabajo';

@Component({
  selector: 'app-formulario-plan-trabajo',
  templateUrl: './formulario-plan-trabajo.component.html',
  styleUrls: ['./formulario-plan-trabajo.component.css']
})
export class FormularioPlanTrabajoComponent implements OnInit {

  @Input() planTrabajo: PlanTrabajo;


  constructor() {
    
   }

  ngOnInit() {
  }

}
