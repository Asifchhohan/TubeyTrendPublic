import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiVideoInsightsComponent } from './ai-video-insights.component';

describe('AiVideoInsightsComponent', () => {
  let component: AiVideoInsightsComponent;
  let fixture: ComponentFixture<AiVideoInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiVideoInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiVideoInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
