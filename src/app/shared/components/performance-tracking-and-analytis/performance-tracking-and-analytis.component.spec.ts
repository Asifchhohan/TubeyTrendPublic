import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTrackingAndAnalytisComponent } from './performance-tracking-and-analytis.component';

describe('PerformanceTrackingAndAnalytisComponent', () => {
  let component: PerformanceTrackingAndAnalytisComponent;
  let fixture: ComponentFixture<PerformanceTrackingAndAnalytisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceTrackingAndAnalytisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceTrackingAndAnalytisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
