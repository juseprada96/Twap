import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioInvestigadoresComponent} from './formulario-investigadores.component';

describe('FormularioInvestigadoresComponent', () => {
  let component: FormularioInvestigadoresComponent;
  let fixture: ComponentFixture<FormularioInvestigadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioInvestigadoresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
