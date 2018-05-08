import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PropuestaInvestigacion} from '../../models/propuesta-investigacion';


@Component({
  selector: 'app-adicionar-propuesta',
  templateUrl: './adicionar-propuesta.component.html',
  styleUrls: ['./adicionar-propuesta.component.css']
})
export class AdicionarPropuestaComponent implements OnInit {

  @Input() propuesta: PropuestaInvestigacion;

  @Output() eventoEliminar = new EventEmitter<PropuestaInvestigacion>();

  eliminarPropuesta() {
    this.eventoEliminar.emit(this.propuesta);
  }

  constructor() {

  }

  ngOnInit() {
  }
}
