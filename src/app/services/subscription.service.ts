import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Plan {
  id: string;
  name: string;
  priceMonthly?: number;
  priceYearly?: number;
  priceOneTime?: number;
  credits: number;
  description?: string[];
}

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private _activePlan = new BehaviorSubject<Plan| null>(null);
  activePlan$ = this._activePlan.asObservable();

  private _credits = new BehaviorSubject<number>(0);
  credits$ = this._credits.asObservable();

  private _trialActive = new BehaviorSubject<boolean>(false);
  trialActive$ = this._trialActive.asObservable();

  plans: Plan[] = [
    { id: 'boost-monthly', name: 'Boost (Monthly)', priceMonthly: 16.58, credits: 100, description: [ 'Unlimited Inspiration & Ideation', 'Optimize Your Videos for Peak Visibility', 'Masterclasses from Top Creators', 'Instant Channel Audit & AI Coaching' ] },
    { id: 'boost-yearly', name: 'Boost (12 months)', priceOneTime: 199, credits: 1500, description: [ '12 months • $199', 'All Boost features', 'Best savings' ] }
  ];

  constructor() {
    // load from storage
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem('subscription_state');
        if (raw) {
          const state = JSON.parse(raw);
          if (state.activePlanId) {
            const p = this.plans.find(x => x.id === state.activePlanId) || null;
            this._activePlan.next(p as any);
          }
          if (typeof state.credits === 'number') this._credits.next(state.credits);
          if (typeof state.trialActive === 'boolean') this._trialActive.next(state.trialActive);
        }
      }
    } catch(e){}
  }

  persist() {
    const state = {
      activePlanId: this._activePlan.value?.id || null,
      credits: this._credits.value,
      trialActive: this._trialActive.value
    };
    try { if (typeof window !== 'undefined') { localStorage.setItem('subscription_state', JSON.stringify(state)); } } catch(e){}
  }

  startTrial(planId: string, days = 7) {
    const plan = this.plans.find(p => p.id === planId);
    if (!plan) return false;
    if (this._trialActive.value) return false; // already in trial
    this._trialActive.next(true);
    // schedule trial end: for demo store end date
    const end = new Date(); end.setDate(end.getDate() + days);
    try { if (typeof window !== 'undefined') { localStorage.setItem('trial_end', end.toISOString()); } } catch(e){}
    this.persist();
    // grant a small trial credits allotment
    this.addCredits(20);
    return true;
  }

  activatePlan(planId: string) {
    const plan = this.plans.find(p => p.id === planId);
    if (!plan) return false;
    this._activePlan.next(plan);
    // allocate credits
    const newCredits = this._credits.value + plan.credits;
    this._credits.next(newCredits);
    this._trialActive.next(false);
    this.persist();
    return true;
  }

  addCredits(n: number) { this._credits.next(this._credits.value + n); this.persist(); }
}
