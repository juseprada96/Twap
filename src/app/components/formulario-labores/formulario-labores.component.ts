import {Component, OnInit} from '@angular/core';
import {ActividadAdministracion} from '../../models/actividad-administracion';


@Component({
  selector: 'app-formulario-labores',
  templateUrl: './formulario-labores.component.html',
  styleUrls: ['./formulario-labores.component.css']
})
export class FormularioLaboresComponent implements OnInit {

  laborSeleccionada: ActividadAdministracion;

  lab1: ActividadAdministracion = {
    idActividadAdmon: '1',
    nombreActividadAdmon: 'Director de programa',
    descripcionActividadAdmon: '',
    horasActividadAdmon: 330
  };

  lab2: ActividadAdministracion = {
    idActividadAdmon: '2',
    nombreActividadAdmon: 'Jefe Departamento',
    descripcionActividadAdmon: '',
    horasActividadAdmon: 330
  };

  lab3: ActividadAdministracion = {
    idActividadAdmon: '3',
    nombreActividadAdmon: 'Director de Centro',
    descripcionActividadAdmon: '',
    horasActividadAdmon: 220
  };

  lab4: ActividadAdministracion = {
    idActividadAdmon: '4',
    nombreActividadAdmon: 'LIQ',
    descripcionActividadAdmon: '',
    horasActividadAdmon: 220
  };

  lab5: ActividadAdministracion = {
    idActividadAdmon: '5',
    nombreActividadAdmon: 'Grupo Natura',
    descripcionActividadAdmon: '',
    horasActividadAdmon: 220
  };

  laboresAgregadas: ActividadAdministracion[];
  listaLabores: ActividadAdministracion[];

  constructor() {
    this.listaLabores = [this.lab1,
      this.lab2,
      this.lab3,
      this.lab4,
      this.lab5];
    this.laboresAgregadas = [];

  }


  agregarLabor() {
    if (this.laborSeleccionada != null) {
      this.laboresAgregadas.push(this.laborSeleccionada);
      this.listaLabores.splice(this.listaLabores.findIndex(actividad => actividad.idActividadAdmon === this.laborSeleccionada.idActividadAdmon), 1);
    } else {
      alert('Seleccione una labor');
    }
  }

  eliminarLabor(idActividadAdmon: string) {
    let indexAgregadas = this.laboresAgregadas.findIndex(actividad => actividad.idActividadAdmon === idActividadAdmon);
    let acti = this.laboresAgregadas[indexAgregadas];
    this.laboresAgregadas.splice(indexAgregadas, 1);
    this.listaLabores.push(acti);
  }

  displayFn(labor?: ActividadAdministracion): string | undefined {
    return labor ? labor.nombreActividadAdmon : undefined;
  }

  ngOnInit() {

  }
}
