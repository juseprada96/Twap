import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioOtrasLaboresComponent} from './formulario-otras-labores.component';

describe('FormularioOtrasLaboresComponent', () => {
  let component: FormularioOtrasLaboresComponent;
  let fixture: ComponentFixture<FormularioOtrasLaboresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioOtrasLaboresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioOtrasLaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
