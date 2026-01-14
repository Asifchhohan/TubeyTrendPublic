import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptrendingyoutubechannelsComponent } from './toptrendingyoutubechannels.component';

describe('ToptrendingyoutubechannelsComponent', () => {
  let component: ToptrendingyoutubechannelsComponent;
  let fixture: ComponentFixture<ToptrendingyoutubechannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToptrendingyoutubechannelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToptrendingyoutubechannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
