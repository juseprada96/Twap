import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarAsignaturaComponent} from './adicionar-asignatura.component';

describe('AdicionarAsignaturaComponent', () => {
  let component: AdicionarAsignaturaComponent;
  let fixture: ComponentFixture<AdicionarAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarAsignaturaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
