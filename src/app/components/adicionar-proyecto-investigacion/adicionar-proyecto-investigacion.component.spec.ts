import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarProyectoInvestigacionComponent} from './adicionar-proyecto-investigacion.component';

describe('AdicionarProyectoInvestigacionComponent', () => {
  let component: AdicionarProyectoInvestigacionComponent;
  let fixture: ComponentFixture<AdicionarProyectoInvestigacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarProyectoInvestigacionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProyectoInvestigacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
