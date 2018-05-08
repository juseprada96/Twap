import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormularioLaboresAdministrativasComponent} from './formulario-labores-administrativas.component';

describe('FormularioLaboresAdministrativasComponent', () => {
  let component: FormularioLaboresAdministrativasComponent;
  let fixture: ComponentFixture<FormularioLaboresAdministrativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioLaboresAdministrativasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLaboresAdministrativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
