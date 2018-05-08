import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioInvestigacionComponent} from './formulario-investigacion.component';

describe('FormularioInvestigacionComponent', () => {
  let component: FormularioInvestigacionComponent;
  let fixture: ComponentFixture<FormularioInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioInvestigacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
