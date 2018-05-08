import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPropuestaInvestigacionComponent } from './formulario-propuesta-investigacion.component';

describe('FormularioPropuestaInvestigacionComponent', () => {
  let component: FormularioPropuestaInvestigacionComponent;
  let fixture: ComponentFixture<FormularioPropuestaInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPropuestaInvestigacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPropuestaInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
