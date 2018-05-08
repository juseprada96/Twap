import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Asignatura} from '../../models/asignatura';
import '@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
  selector: 'app-formulario-asignatura',
  templateUrl: './formulario-asignatura.component.html',
  styleUrls: ['./formulario-asignatura.component.css']
})

export class FormularioAsignaturaComponent implements OnInit {

  @Input() materiasAgregadas: Asignatura[];

  myControl: FormControl = new FormControl();
  asignaturaSelecionada: Asignatura;

  a1: Asignatura = {
    idAsignatura: '1',
    nombreAsignatura: 'Principios Fisico Quimica',
    NRC: '26123',
    creditos: 3,
    grupos: []
  };
  a2: Asignatura = {
    idAsignatura: '2',
    nombreAsignatura: 'Laboratorio Fisico Quimica',
    NRC: '46123',
    creditos: 1,
    grupos: []
  };
  options = [
    this.a1,
    this.a2
  ];

  filteredOptions: Observable<Asignatura[]>;

  constructor() {
  }


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Asignatura>(''),
        map(value => typeof value === 'string' ? value : value.nombreAsignatura),
        map(name => name ? this.filter(name) : this.options.slice())
      );
  }

  filter(name: string): Asignatura[] {
    return this.options.filter(option => {
      if (option.nombreAsignatura.toLowerCase().indexOf(name.toLowerCase()) === 0
        || option.NRC.toLowerCase().indexOf(name.toLocaleLowerCase()) === 0) {
        return true;
      }
    });
  }

  agregarAsignatura() {
    if (this.asignaturaSelecionada && this.asignaturaSelecionada.nombreAsignatura) {
      if (!this.materiasAgregadas.includes(this.asignaturaSelecionada)) {
        this.materiasAgregadas.push(this.asignaturaSelecionada);
        this.asignaturaSelecionada = new Asignatura();
      } else {
        alert('La asignatura ya fue adicionada');
      }
    } else {
      alert('Seleccione una asignatura');
    }
  }

  eliminarAsignatura(event: Asignatura) {
    console.log(event);
    let index = this.materiasAgregadas.findIndex(materia => materia.nombreAsignatura == event.nombreAsignatura);
    this.materiasAgregadas.splice(index, 1);
  }


  displayFn(asignatura?: Asignatura): string | undefined {
    return asignatura ? asignatura.nombreAsignatura : undefined;
  }
}
