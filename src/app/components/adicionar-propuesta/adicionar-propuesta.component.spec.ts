import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPropuestaComponent } from './adicionar-propuesta.component';

describe('AdicionarPropuestaComponent', () => {
  let component: AdicionarPropuestaComponent;
  let fixture: ComponentFixture<AdicionarPropuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPropuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
