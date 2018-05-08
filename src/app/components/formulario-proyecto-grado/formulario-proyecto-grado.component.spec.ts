import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioProyectoGradoComponent} from './formulario-proyecto-grado.component';

describe('FormularioProyectoGradoComponent', () => {
  let component: FormularioProyectoGradoComponent;
  let fixture: ComponentFixture<FormularioProyectoGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioProyectoGradoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProyectoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
