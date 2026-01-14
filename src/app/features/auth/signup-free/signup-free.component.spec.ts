import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFreeComponent } from './signup-free.component';

describe('SignupFreeComponent', () => {
  let component: SignupFreeComponent;
  let fixture: ComponentFixture<SignupFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupFreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
