import {Component, Input, OnInit} from '@angular/core';
import {ActividadAdministracion} from '../../models/actividad-administracion';

@Component({
  selector: 'app-formulario-otras-labores',
  templateUrl: './formulario-otras-labores.component.html',
  styleUrls: ['./formulario-otras-labores.component.css']
})
export class FormularioOtrasLaboresComponent implements OnInit {

  otraLabor: ActividadAdministracion;
  @Input() otrasLaboresAgregadas: ActividadAdministracion[];

  constructor() {
    this.otrasLaboresAgregadas = [];
    this.otraLabor = new ActividadAdministracion();
  }

  ngOnInit() {
  }

  agregarLabor() {
    if (this.otraLabor.nombreActividadAdmon.trim()) {
      this.otraLabor.idActividadAdmon = (this.otrasLaboresAgregadas.length + 1) + '';
      let otra = new ActividadAdministracion();
      otra.nombreActividadAdmon = this.otraLabor.nombreActividadAdmon;
      this.otrasLaboresAgregadas.push(otra);
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
