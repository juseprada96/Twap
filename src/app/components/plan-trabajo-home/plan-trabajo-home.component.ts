import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanTrabajo } from '../../models/plan-trabajo';
import { PlanDocencia } from '../../models/plan-docencia';
import { PlanAdministracion } from '../../models/plan-administracion';
import { PlanInvestigacion } from '../../models/plan-investigacion';

@Component({
  selector: 'app-plan-trabajo-home',
  templateUrl: './plan-trabajo-home.component.html',
  styleUrls: ['./plan-trabajo-home.component.css']
})
export class PlanTrabajoHomeComponent implements OnInit {

  public pieChartLabels:string[] = ['Docencia', 'Investigación', 'Administración'];
  public pieChartData:number[] = [200, 200, 100];
  public pieChartType:string = 'pie';

  planesTrabajo: PlanTrabajo[];
  planTrabajo : PlanTrabajo;
  
  $:any;
  
  openModal(){
    this.$('#myModal').on('shown.bs.modal', function () {
      this.$('#myInput').focus()
    })
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { 
    this.planesTrabajo = [];
    this.planTrabajo = new PlanTrabajo()
    this.planTrabajo.planDocencia = new PlanDocencia();
    this.planTrabajo.planAdministracion = new PlanAdministracion();
    this.planTrabajo.planInvestigacion = new PlanInvestigacion();
    this.planTrabajo.fechaInicio = new Date();
    this.planTrabajo.fechaFin = new Date();
  }

  agregarPlan():void{
    let plan = new PlanTrabajo();
    this.planTrabajo = plan;
    this.planesTrabajo.push(plan);
  }

  distribucion(plan:PlanTrabajo):number[]{
    let  n = [];
    n.push(plan.planDocencia.totalHoras);
    n.push(plan.planInvestigacion.horasDedicadas);
    n.push(plan.planAdministracion.horasDedicadas);
    return n;
  }



  ngOnInit() {
  }

}
