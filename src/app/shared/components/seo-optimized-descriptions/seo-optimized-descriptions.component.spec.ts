import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoOptimizedDescriptionsComponent } from './seo-optimized-descriptions.component';

describe('SeoOptimizedDescriptionsComponent', () => {
  let component: SeoOptimizedDescriptionsComponent;
  let fixture: ComponentFixture<SeoOptimizedDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoOptimizedDescriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoOptimizedDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
