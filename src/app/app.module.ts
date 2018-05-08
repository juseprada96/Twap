import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdicionarAsignaturaComponent } from './components/adicionar-asignatura/adicionar-asignatura.component';
import { FormularioAsignaturaComponent } from './components/formulario-asignatura/formulario-asignatura.component';


import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FormularioDocenciaComponent } from './components/formulario-docencia/formulario-docencia.component';
import { FormularioProyectoGradoComponent } from './components/formulario-proyecto-grado/formulario-proyecto-grado.component';
import { FormularioSemilleroComponent } from './components/formulario-semillero/formulario-semillero.component';
import { AdicionarProyectoGradoComponent } from './components/adicionar-proyecto-grado/adicionar-proyecto-grado.component';
import { AdicionarSemilleroComponent } from './components/adicionar-semillero/adicionar-semillero.component';
import { PlanTrabajoHomeComponent } from './components/plan-trabajo-home/plan-trabajo-home.component';
import { FormularioPlanTrabajoComponent } from './components/formulario-plan-trabajo/formulario-plan-trabajo.component';
import { ModalComponent } from './components/modal/modal.component';



const appRoutes : Routes = [
{
  path:'home', component: HomeComponent
},
{
  path:'planTrabajo', component: FormularioPlanTrabajoComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarAsignaturaComponent,
    FormularioAsignaturaComponent,
    FormularioDocenciaComponent,
    FormularioProyectoGradoComponent,
    FormularioSemilleroComponent,
    AdicionarProyectoGradoComponent,
    AdicionarSemilleroComponent,
    PlanTrabajoHomeComponent,
    FormularioPlanTrabajoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    ChartsModule,
    MatDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
