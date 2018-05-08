import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AdicionarAsignaturaComponent} from './components/adicionar-asignatura/adicionar-asignatura.component';
import {FormularioAsignaturaComponent} from './components/formulario-asignatura/formulario-asignatura.component';


<<<<<<< HEAD
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
=======
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormularioDocenciaComponent} from './components/formulario-docencia/formulario-docencia.component';
import {FormularioProyectoGradoComponent} from './components/formulario-proyecto-grado/formulario-proyecto-grado.component';
import {FormularioSemilleroComponent} from './components/formulario-semillero/formulario-semillero.component';
import {AdicionarProyectoGradoComponent} from './components/adicionar-proyecto-grado/adicionar-proyecto-grado.component';
import {AdicionarSemilleroComponent} from './components/adicionar-semillero/adicionar-semillero.component';
import {FormularioLaboresAdministrativasComponent} from './components/formulario-labores-administrativas/formulario-labores-administrativas.component';
import {FormularioLaboresComponent} from './components/formulario-labores/formulario-labores.component';
import {FormularioOtrasLaboresComponent} from './components/formulario-otras-labores/formulario-otras-labores.component';
import {MatSelectModule} from '@angular/material/select';
import {AdicionarLaborComponent} from './components/adicionar-labor/adicionar-labor.component';
import {MatIconModule} from '@angular/material/icon';
import {AdicionarOtraLaborComponent} from './components/adicionar-otra-labor/adicionar-otra-labor.component';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'planDocencia', component: FormularioDocenciaComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];
>>>>>>> 3d8a4151da5dd9eaa8adb19d8fb0d9eecaa9043c

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
<<<<<<< HEAD
    PlanTrabajoHomeComponent,
    FormularioPlanTrabajoComponent,
    ModalComponent
=======
    FormularioLaboresAdministrativasComponent,
    FormularioLaboresComponent,
    FormularioOtrasLaboresComponent,
    AdicionarLaborComponent,
    AdicionarOtraLaborComponent
>>>>>>> 3d8a4151da5dd9eaa8adb19d8fb0d9eecaa9043c
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
<<<<<<< HEAD
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    ChartsModule,
    MatDatepickerModule,
    BrowserAnimationsModule
=======
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
>>>>>>> 3d8a4151da5dd9eaa8adb19d8fb0d9eecaa9043c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
