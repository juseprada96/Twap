import {Component, Input, OnInit} from '@angular/core';
import {PropuestaInvestigacion} from '../../models/propuesta-investigacion';

@Component({
  selector: 'app-formulario-propuesta-investigacion',
  templateUrl: './formulario-propuesta-investigacion.component.html',
  styleUrls: ['./formulario-propuesta-investigacion.component.css']
})
export class FormularioPropuestaInvestigacionComponent implements OnInit {
  propuesta: PropuestaInvestigacion;
  @Input() propuestas: PropuestaInvestigacion[];

  constructor() {
    this.propuesta = new PropuestaInvestigacion();
  }

  agregarPropuesta() {
    if(this.propuesta.nombrePropuesta.trim()){
    let p = new PropuestaInvestigacion();
    p.fechaPresentacion = new Date();
    p.nombrePropuesta = this.propuesta.nombrePropuesta;
    p.idPropuestaInvestigacion = (this.propuestas.length + 1).toString();
    this.propuestas.push(p);
    this.propuesta = new PropuestaInvestigacion();
    }else {
      alert("El nombre no puede ser vacio")
    }
  }

  eliminarPropuesta(event: PropuestaInvestigacion) {
    console.log(event);
    let index = this.propuestas.findIndex(propuesta => propuesta.idPropuestaInvestigacion == event.idPropuestaInvestigacion);
    this.propuestas.splice(index, 1);
  }

  ngOnInit() {
  }
}
