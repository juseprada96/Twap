import {Component, Input, OnInit} from '@angular/core';
import {Semillero} from '../../models/semillero';

@Component({
  selector: 'app-formulario-semillero',
  templateUrl: './formulario-semillero.component.html',
  styleUrls: ['./formulario-semillero.component.css']
})
export class FormularioSemilleroComponent implements OnInit {

  semillero: Semillero;
  @Input() semilleros: Semillero[];

  constructor() {
    this.semilleros = [];
    this.semillero = new Semillero();
  }

  agregarSemillero() {
    let s = new Semillero();
    s.nombreSemillero = this.semillero.nombreSemillero;
    s.horas = this.semillero.horas;
    s.centroRegistro = this.semillero.centroRegistro;
    s.idSemillero = this.semilleros.length + 1 + '';
    this.semilleros.push(s);
    this.semillero = new Semillero();
  }

  eliminarSemillero(event: Semillero) {
    console.log(event);
    let index = this.semilleros.findIndex(semillero => semillero.idSemillero == event.idSemillero);
    this.semilleros.splice(index, 1);
  }

  ngOnInit() {
  }

}
