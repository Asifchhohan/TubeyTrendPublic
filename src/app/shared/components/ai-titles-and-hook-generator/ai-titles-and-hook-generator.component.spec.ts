import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTitleGeneratorComponent } from './ai-titles-and-hook-generator.component';

describe('AiTitleGeneratorComponent', () => {
  let component: AiTitleGeneratorComponent;
  let fixture: ComponentFixture<AiTitleGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTitleGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTitleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
