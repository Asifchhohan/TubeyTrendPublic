import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubscriptionService } from './subscription.service';

@Injectable({ providedIn: 'root' })
export class CreditService {
  private credits$ = new BehaviorSubject<number>(0);

  constructor(private subscriptionService: SubscriptionService) {
    this.subscriptionService.getUserState().subscribe(s => this.credits$.next(s.credits || 0));
  }

  getCredits(): Observable<number> { return this.credits$.asObservable(); }

  useOne(): boolean {
    return this.subscriptionService.deductCredit(1);
  }

  addCredits(amount: number) { this.subscriptionService.addCredits(amount); }
}
