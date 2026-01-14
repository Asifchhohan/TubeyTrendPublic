import { Injectable } from '@angular/core';

export interface Plan {
  id: string;
  name: string;
  priceMonthly: number;
  trialDays?: number;
  creditsPerMonth: number;
  features: string[];
  cta: string;
}

export interface AddOn {
  id: string;
  name: string;
  credits: number;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class PricingService {
  private plans: Plan[] = [
    {
      id: 'boost',
      name: 'BOOST',
      priceMonthly: 16.58,
      trialDays: 7,
      creditsPerMonth: 300,
      features: [
        'Unlimited Inspiration & Ideation',
        'AI Title Suggestions',
        'AI Trending Keywords'
      ],
      cta: 'Start for Free'
    },
    {
      id: 'coaching',
      name: 'COACHING',
      priceMonthly: 99,
      creditsPerMonth: 2000,
      features: [
        '1-on-1 AI Coach (simulated)',
        'Personal Channel Audit (dummy report)',
        'Step-by-step Growth Plan'
      ],
      cta: 'Upgrade to Coaching'
    }
  ];

  private extraPlans = [
    { id: 'starter', name: 'Starter', priceMonthly: 5, creditsPerMonth: 50, features: ['Basic ideas'], cta: 'Buy' },
    { id: 'pro', name: 'Pro', priceMonthly: 29, creditsPerMonth: 800, features: ['Pro ideas'], cta: 'Buy' },
    { id: 'enterprise', name: 'Enterprise', priceMonthly: 249, creditsPerMonth: 10000, features: ['Dedicated support'], cta: 'Contact' }
  ];

  private addOns: AddOn[] = [
    { id: 'a100', name: 'Extra 100 credits', credits: 100, price: 5 },
    { id: 'a500', name: 'Extra 500 credits', credits: 500, price: 20 },
    { id: 'a1000', name: 'Extra 1000 credits', credits: 1000, price: 35 }
  ];

  getPlans() { return this.plans.slice(); }
  getPlan(id: string) { return this.plans.concat(this.extraPlans).find(p => p.id === id) as Plan | any; }
  getAllPlans() { return this.plans.concat(this.extraPlans); }
  getAddOns() { return this.addOns.slice(); }
}
