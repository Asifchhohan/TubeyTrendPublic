import { Component, Input } from '@angular/core';
import { Plan } from '../../../core/services/pricing.service';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  template: `<div class="plan-card">
  <h3>{{plan.name}}</h3>
  <div class="price">\${{plan.priceMonthly}} <span class="per">/ month</span></div>
  <div class="trial" *ngIf="plan.trialDays">{{plan.trialDays}} day free trial</div>
  <ul class="features">
    <li *ngFor="let f of plan.features">{{f}}</li>
  </ul>
  <div class="actions"><button class="primary" (click)="onPrimary()">{{plan.cta}}</button></div>
</div>`,
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {
  @Input() plan!: Plan & any;
  @Input() onPrimary: () => void = () => {};
}
