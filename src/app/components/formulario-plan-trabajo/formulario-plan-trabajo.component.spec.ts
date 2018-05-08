import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlanTrabajoComponent } from './formulario-plan-trabajo.component';

describe('FormularioPlanTrabajoComponent', () => {
  let component: FormularioPlanTrabajoComponent;
  let fixture: ComponentFixture<FormularioPlanTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPlanTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPlanTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
