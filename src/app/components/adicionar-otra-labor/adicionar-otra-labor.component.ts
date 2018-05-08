import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActividadAdministracion} from '../../models/actividad-administracion';

@Component({
  selector: 'app-adicionar-otra-labor',
  templateUrl: './adicionar-otra-labor.component.html',
  styleUrls: ['./adicionar-otra-labor.component.css']
})
export class AdicionarOtraLaborComponent implements OnInit {

  @Input() otraLabor: ActividadAdministracion;
  @Output() myEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  lanzar(event) {
    let id = this.otraLabor.idActividadAdmon;
    this.myEvent.emit(id);
  }
}
