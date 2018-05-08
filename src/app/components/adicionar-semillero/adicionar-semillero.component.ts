import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Semillero } from '../../models/semillero';

@Component({
  selector: 'app-adicionar-semillero',
  templateUrl: './adicionar-semillero.component.html',
  styleUrls: ['./adicionar-semillero.component.css']
})
export class AdicionarSemilleroComponent implements OnInit {

  @Input() semillero : Semillero;

  @Output() eventoEliminar = new EventEmitter<Semillero>()

  eliminarSemillero(){
    this.eventoEliminar.emit(this.semillero);
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
