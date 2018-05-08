import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdicionarLaborComponent} from './adicionar-labor.component';

describe('AdicionarLaborComponent', () => {
  let component: AdicionarLaborComponent;
  let fixture: ComponentFixture<AdicionarLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarLaborComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
