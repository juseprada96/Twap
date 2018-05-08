import {Component, OnInit, Input} from '@angular/core';
import { PlanAdministracion } from '../../models/plan-administracion';

@Component({
  selector: 'app-formulario-labores-administrativas',
  templateUrl: './formulario-labores-administrativas.component.html',
  styleUrls: ['./formulario-labores-administrativas.component.css']
})
export class FormularioLaboresAdministrativasComponent implements OnInit {

  @Input() planAdministracion: PlanAdministracion;

  constructor() {
  }

  ngOnInit() {
    this.planAdministracion.actividadesAdministracion = [];
    this.planAdministracion.otrasActividadesAdministracion = [];
  }

}
