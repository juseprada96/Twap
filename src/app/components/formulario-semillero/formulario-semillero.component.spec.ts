import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioSemilleroComponent} from './formulario-semillero.component';

describe('FormularioSemilleroComponent', () => {
  let component: FormularioSemilleroComponent;
  let fixture: ComponentFixture<FormularioSemilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioSemilleroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
