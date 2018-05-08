import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarProyectoGradoComponent} from './adicionar-proyecto-grado.component';

describe('AdicionarProyectoGradoComponent', () => {
  let component: AdicionarProyectoGradoComponent;
  let fixture: ComponentFixture<AdicionarProyectoGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarProyectoGradoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProyectoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
