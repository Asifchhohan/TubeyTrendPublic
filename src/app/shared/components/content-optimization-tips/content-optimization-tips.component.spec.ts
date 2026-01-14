import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOptimizerComponent } from './content-optimization-tips.component';

describe('ContentOptimizerComponent', () => {
  let component: ContentOptimizerComponent;
  let fixture: ComponentFixture<ContentOptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentOptimizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentOptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
