import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SubscriptionInfo {
  planName: string;
  credits: number;
  startDate: string;
  expiryDate: string;
  paymentMethod: string;
}

export interface UserState {
  isLoggedIn: boolean;
  credits: number;
  activePlan: SubscriptionInfo | null;
}

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private userState$ = new BehaviorSubject<UserState>({ isLoggedIn: true, credits: 0, activePlan: null });

  getUserState(): Observable<UserState> { return this.userState$.asObservable(); }
  getSnapshot(): UserState { return this.userState$.value; }

  activatePlan(info: SubscriptionInfo) {
    const next = { ...this.userState$.value };
    next.activePlan = info;
    next.credits = (next.credits || 0) + info.credits;
    this.userState$.next(next);
  }

  addCredits(amount: number) {
    const next = { ...this.userState$.value };
    next.credits = (next.credits || 0) + amount;
    this.userState$.next(next);
  }

  deductCredit(amount = 1): boolean {
    const cur = this.userState$.value.credits || 0;
    if (cur < amount) return false;
    const next = { ...this.userState$.value };
    next.credits = cur - amount;
    this.userState$.next(next);
    return true;
  }
}
