import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingKeywordsAndHashtagsComponent } from './trending-keywords-and-hashtags.component';

describe('TrendingKeywordsAndHashtagsComponent', () => {
  let component: TrendingKeywordsAndHashtagsComponent;
  let fixture: ComponentFixture<TrendingKeywordsAndHashtagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingKeywordsAndHashtagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingKeywordsAndHashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
