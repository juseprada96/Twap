import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDocenciaComponent } from './formulario-docencia.component';

describe('FormularioDocenciaComponent', () => {
  let component: FormularioDocenciaComponent;
  let fixture: ComponentFixture<FormularioDocenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDocenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDocenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
