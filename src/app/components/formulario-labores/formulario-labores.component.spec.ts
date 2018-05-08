import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioLaboresComponent} from './formulario-labores.component';

describe('FormularioLaboresComponent', () => {
  let component: FormularioLaboresComponent;
  let fixture: ComponentFixture<FormularioLaboresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioLaboresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLaboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
