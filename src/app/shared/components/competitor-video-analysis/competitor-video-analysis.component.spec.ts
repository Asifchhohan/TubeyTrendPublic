import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorInsightsComponent } from './competitor-video-analysis.component';

describe('CompetitorInsightsComponent', () => {
  let component: CompetitorInsightsComponent;
  let fixture: ComponentFixture<CompetitorInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitorInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitorInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
