import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarSemilleroComponent } from './adicionar-semillero.component';

describe('AdicionarSemilleroComponent', () => {
  let component: AdicionarSemilleroComponent;
  let fixture: ComponentFixture<AdicionarSemilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarSemilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
