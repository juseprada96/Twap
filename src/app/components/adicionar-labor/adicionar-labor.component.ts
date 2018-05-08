import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActividadAdministracion} from '../../models/actividad-administracion';

@Component({
  selector: 'app-adicionar-labor',
  templateUrl: './adicionar-labor.component.html',
  styleUrls: ['./adicionar-labor.component.css']
})
export class AdicionarLaborComponent implements OnInit {

  @Input() labor: ActividadAdministracion;
  @Output() myevent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  lanzar(event) {
    let id = this.labor.idActividadAdmon;
    this.myevent.emit(id);
  }
}
