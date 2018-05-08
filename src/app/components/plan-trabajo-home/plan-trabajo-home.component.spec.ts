import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanTrabajoHomeComponent} from './plan-trabajo-home.component';

describe('PlanTrabajoHomeComponent', () => {
  let component: PlanTrabajoHomeComponent;
  let fixture: ComponentFixture<PlanTrabajoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanTrabajoHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTrabajoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
