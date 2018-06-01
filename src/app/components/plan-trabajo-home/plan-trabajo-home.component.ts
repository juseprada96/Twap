import {Component, OnInit} from '@angular/core';
import {PlanTrabajo} from '../../models/plan-trabajo';
import {PlanDocencia} from '../../models/plan-docencia';
import {PlanAdministracion} from '../../models/plan-administracion';
import {PlanInvestigacion} from '../../models/plan-investigacion';

@Component({
  selector: 'app-plan-trabajo-home',
  templateUrl: './plan-trabajo-home.component.html',
  styleUrls: ['./plan-trabajo-home.component.css']
})
export class PlanTrabajoHomeComponent implements OnInit {

  public pieChartLabels: string[] = ['Docencia', 'Investigación', 'Administración'];
  public pieChartData: number[];
  public pieChartType: string = 'pie';

  planesTrabajo: PlanTrabajo[];
  planTrabajo: PlanTrabajo;
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() {
    this.planesTrabajo = [];
    this.inicializarPlan();
  }

  inicializarPlan() {
    this.planTrabajo = new PlanTrabajo();
    this.planTrabajo.planDocencia = new PlanDocencia();
    this.planTrabajo.planDocencia.totalHoras = 220;
    this.planTrabajo.planAdministracion = new PlanAdministracion();
    this.planTrabajo.planAdministracion.horasDedicadas = 240;
    this.planTrabajo.planInvestigacion = new PlanInvestigacion();
    this.planTrabajo.planInvestigacion.horasDedicadas = 300;
    this.planTrabajo.fechaInicio = new Date();
    this.planTrabajo.fechaFin = new Date();
  }


  validarPlan():boolean{
    let ret = true;
    if(!this.planTrabajo.fechaFin){
      alert("No puede haber campos vacios");
      ret = false;
    }else if(!this.planTrabajo.fechaInicio){
      alert("No puede haber campos vacios");
      ret = false;
    }else if(!this.planTrabajo.periodo){
      alert("No puede haber campos vacios");
      ret = false;
    }else if(!this.validarDocencia()){
      alert("No puede haber campos vacios");
      ret = false;
    }else if(!this.validarInvestigacion()){
      alert("No puede haber campos vacios");
      ret = false;
    }else if(!this.validarAdmon()){
      alert("No puede haber campos vacios");
      ret = false;
    }
    return ret;
  }

  validarDocencia():boolean{
    let ret = true;
    this.planTrabajo.planDocencia.asignaturas.forEach((asignatura)=>{
      asignatura.grupos.forEach((grupo)=>{
        if(!grupo.numeroEstudiantes){
          ret = false;
        }else if(!grupo.numeroHoras){
          ret = false;
        }
      });
    });
    this.planTrabajo.planDocencia.proyectosUno.forEach((proyecto)=>{
      proyecto.estudiantes.forEach((est)=>{
        if(!est.codigo.trim()){
          ret = false;
        }else if(!est.nombre.trim()){
          ret = false;
        }
      });
    });
    this.planTrabajo.planDocencia.proyectosDos.forEach((proyecto)=>{
      proyecto.estudiantes.forEach((est)=>{
        if(!est.codigo.trim()){
          ret = false;
        }else if(!est.nombre.trim()){
          ret = false;
        }
      });
    });
    this.planTrabajo.planDocencia.semilleros.forEach((semillero)=>{
      if(!semillero.nombreSemillero.trim()){
        ret = false;
      }else if(!semillero.centroRegistro.trim()){
        ret = false;
      }else if (!semillero.horas){
        ret = false;
      }
    });
    return ret;
  }

  validarInvestigacion():boolean{
    let ret = true;
    this.planTrabajo.planInvestigacion.propuestaInvestagacion.forEach((prop)=>{
      if(prop.descripcionPropuesta.trim()){
        ret = false;
      }
    });

    this.planTrabajo.planInvestigacion.proyectosInvestigacion.forEach((pro)=>{
      if(!pro.nombreProyecto.trim()){
        ret = false;
      }else if(!pro.centroCostos.trim()){
        ret = false;
      }
      pro.actividadesProyecto.forEach((act)=>{
        if(!act.descripcionActividad.trim()){
          ret = false;
        }else if(!act.FechaEsperada){
          ret = false;
        }else if(!act.nombreActividad){
          ret = false;
        }else if(!act.duracionHoras){
          ret = false;
        }
      });
    });
    this.planTrabajo.planInvestigacion.jovenes.forEach((joven)=>{
      if(!joven.universidad.trim()){
        ret = false;
      }else if(!joven.nombre.trim()){
        ret = false;
      }
      joven.proyectos.forEach((nom)=>{
        if(!nom.trim()){
          ret = false;
        }
      });
    });
    return ret;
  }

  validarAdmon():boolean{
    let ret = true;

    this.planTrabajo.planAdministracion.actividadesAdministracion.forEach((act)=>{
      if(!act.nombreActividadAdmon.trim()){
        ret = false;
      }else if(!act.descripcionActividadAdmon.trim()){
        ret = false;
      }else if(!act.horasActividadAdmon){
        ret = false;
      }
    });

    this.planTrabajo.planAdministracion.otrasActividadesAdministracion.forEach((act)=>{
      if(!act.horasActividadAdmon){
        ret = false;
      }else if(!act.descripcionActividadAdmon.trim()){
        ret = false;
      }else if(!act.nombreActividadAdmon.trim()){
        ret = false;
      }
    });
    return ret;
  }

  agregarPlan(): void {
    if(this.validarPlan()){
    let plan = new PlanTrabajo();
    plan = this.planTrabajo;
    this.planesTrabajo.push(plan);
    this.pieChartData = this.distribucion(plan);
    this.inicializarPlan();
    }
  }

  distribucion(plan: PlanTrabajo): number[] {
    let n = [];
    n.push(plan.planDocencia.totalHoras);
    n.push(plan.planInvestigacion.horasDedicadas);
    n.push(plan.planAdministracion.horasDedicadas);
    return n;
  }

  seleccionarPlan(plan) {
    this.planTrabajo = plan;
  }


  ngOnInit() {
  }

}
