import {Component, OnInit} from '@angular/core';
import {ActividadAdministracion} from '../../models/actividad-administracion';

@Component({
  selector: 'app-formulario-otras-labores',
  templateUrl: './formulario-otras-labores.component.html',
  styleUrls: ['./formulario-otras-labores.component.css']
})
export class FormularioOtrasLaboresComponent implements OnInit {

  laborSeleccionada: ActividadAdministracion;
  otrasLaboresAgregadas: ActividadAdministracion[];
  constructor() {
    this.otrasLaboresAgregadas = [];
  }

  ngOnInit() {
  }

  agregarLabor() {
    if (this.laborSeleccionada != null) {
      this.otrasLaboresAgregadas.push(this.laborSeleccionada);
    } else {
      alert('Escriba el nombre de la labor');
    }
  }

  eliminarLabor(idActividadAdmon: string) {
    let indexAgregadas = this.otrasLaboresAgregadas.findIndex(actividad => actividad.idActividadAdmon === idActividadAdmon);
    this.otrasLaboresAgregadas.splice(indexAgregadas, 1);
  }

  displayFn(labor?: ActividadAdministracion): string | undefined {
    return labor ? labor.nombreActividadAdmon : undefined;
  }
}
