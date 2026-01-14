import { Component, Output, EventEmitter } from '@angular/core';
import { PricingService } from '../../../core/services/pricing.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all-plans',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="view-all">
    <h2>All Plans</h2>
    <div *ngFor="let p of plans" class="plan-row">
      <div class="left">
        <strong>{{p.name}}</strong>
        <div class="price">\${{p.priceMonthly}} / month</div>
      </div>
      <div class="right"><button (click)="buy(p.id)">Buy</button></div>
    </div>
  </div>
  `,
  styleUrls: ['./view-all-plans.component.scss']
})
export class ViewAllPlansComponent {
  @Output() buyPlan = new EventEmitter<string>();
  constructor(private pricing: PricingService, private router: Router) {}
  get plans() { return this.pricing.getAllPlans(); }
  buy(id: string) {
    if (this.buyPlan.observers.length) this.buyPlan.emit(id);
    else this.router.navigate(['/checkout', id]);
  }
}
