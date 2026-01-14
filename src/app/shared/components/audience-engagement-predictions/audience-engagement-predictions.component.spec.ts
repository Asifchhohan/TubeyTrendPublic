import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceEngagementPredictionsComponent } from './audience-engagement-predictions.component';

describe('AudienceEngagementPredictionsComponent', () => {
  let component: AudienceEngagementPredictionsComponent;
  let fixture: ComponentFixture<AudienceEngagementPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudienceEngagementPredictionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudienceEngagementPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
