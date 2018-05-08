import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioProyectoInvestigacionComponent} from './formulario-proyecto-investigacion.component';

describe('FormularioProyectoInvestigacionComponent', () => {
  let component: FormularioProyectoInvestigacionComponent;
  let fixture: ComponentFixture<FormularioProyectoInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioProyectoInvestigacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProyectoInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
