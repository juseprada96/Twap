import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAsignaturaComponent } from './formulario-asignatura.component';

describe('FormularioAsignaturaComponent', () => {
  let component: FormularioAsignaturaComponent;
  let fixture: ComponentFixture<FormularioAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
