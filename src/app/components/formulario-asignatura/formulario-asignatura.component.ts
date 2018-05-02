import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
//mport "@angular/material/prebuilt-themes/indigo-pink.css";
@Component({
  selector: 'app-formulario-asignatura',
  templateUrl: './formulario-asignatura.component.html',
  styleUrls: ['./formulario-asignatura.component.css']
})

export class FormularioAsignaturaComponent implements OnInit {

  constructor() { }

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
