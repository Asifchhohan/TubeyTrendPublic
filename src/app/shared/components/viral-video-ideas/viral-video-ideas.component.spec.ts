import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViralVideoIdeasComponent } from './viral-video-ideas.component';

describe('ViralVideoIdeasComponent', () => {
  let component: ViralVideoIdeasComponent;
  let fixture: ComponentFixture<ViralVideoIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViralVideoIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViralVideoIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
