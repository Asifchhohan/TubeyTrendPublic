import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiContentPlannerComponent } from './ai-content-planner.component';

describe('AiContentPlannerComponent', () => {
  let component: AiContentPlannerComponent;
  let fixture: ComponentFixture<AiContentPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiContentPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiContentPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
