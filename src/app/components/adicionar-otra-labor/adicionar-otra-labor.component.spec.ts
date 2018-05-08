import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarOtraLaborComponent} from './adicionar-otra-labor.component';

describe('AdicionarOtraLaborComponent', () => {
  let component: AdicionarOtraLaborComponent;
  let fixture: ComponentFixture<AdicionarOtraLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarOtraLaborComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarOtraLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
