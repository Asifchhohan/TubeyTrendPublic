import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoScriptCreatorComponent } from './video-script-creator.component';

describe('VideoScriptCreatorComponent', () => {
  let component: VideoScriptCreatorComponent;
  let fixture: ComponentFixture<VideoScriptCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoScriptCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoScriptCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
