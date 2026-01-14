import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeGrowthMatricsComponent } from './youtube-growth-matrics.component';

describe('YoutubeGrowthMatricsComponent', () => {
  let component: YoutubeGrowthMatricsComponent;
  let fixture: ComponentFixture<YoutubeGrowthMatricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeGrowthMatricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeGrowthMatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
