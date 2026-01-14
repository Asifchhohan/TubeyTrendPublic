import { TestBed } from '@angular/core/testing';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SubscriptionService] });
    service = TestBed.inject(SubscriptionService);
    // reset storage
    localStorage.removeItem('subscription_state');
    localStorage.removeItem('trial_end');
  });

  it('should start trial and grant credits', () => {
    const started = service.startTrial('boost-monthly', 7);
    expect(started).toBeTrue();
    service.credits$.subscribe(c => {
      expect(c).toBeGreaterThanOrEqual(20);
    });
  });

  it('should activate plan and add credits', () => {
    const ok = service.activatePlan('boost-monthly');
    expect(ok).toBeTrue();
    service.activePlan$.subscribe(p => expect(p?.id).toBe('boost-monthly'));
    service.credits$.subscribe(c => expect(c).toBeGreaterThan(0));
  });
});
