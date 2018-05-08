import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProyectoInvestigadoresComponent } from './adicionar-proyecto-investigadores.component';

describe('AdicionarProyectoInvestigadoresComponent', () => {
  let component: AdicionarProyectoInvestigadoresComponent;
  let fixture: ComponentFixture<AdicionarProyectoInvestigadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarProyectoInvestigadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProyectoInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
