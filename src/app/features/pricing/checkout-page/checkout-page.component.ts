import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PricingService, Plan, AddOn } from '../../../core/services/pricing.service';
import { PaymentService } from '../../../core/services/payment.service';
import { SubscriptionService } from '../../../core/services/subscription.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  template: `
  <div class="checkout">
    <h2>Checkout</h2>
    <div *ngIf="plan">
      <h3>{{plan.name}} - \${{plan.priceMonthly}} / month</h3>
      <p *ngIf="plan.trialDays">Includes {{plan.trialDays}} day free trial</p>
    </div>

    <h4>Add-ons</h4>
    <div *ngFor="let a of addOns">
      <label><input type="checkbox" [(ngModel)]="selectedAddOns[a.id]"/> {{a.name}} (+{{a.credits}} credits) - \${{a.price}}</label>
    </div>

    <h4>Payment Method</h4>
    <select [(ngModel)]="method">
      <option *ngFor="let m of methods" [value]="m">{{m}}</option>
    </select>

    <div class="actions">
      <button (click)="pay()" [disabled]="!plan || loading">Pay</button>
    </div>

    <div *ngIf="loading">Processing...</div>

    <app-success-modal *ngIf="showSuccess" [message]="successMsg" (close)="onSuccessClose()"></app-success-modal>
  </div>
  `,
  imports: [CommonModule, FormsModule, PaymentModalComponent, SuccessModalComponent],
  styleUrls: ['./checkout-page.component.scss'],
})
export class CheckoutPageComponent implements OnInit {
  @Input() planIn: Plan | null = null;
  @Output() completed = new EventEmitter<void>();
  plan: Plan | any = null;
  addOns: AddOn[] = [];
  selectedAddOns: Record<string, boolean> = {};
  methods = ['JazzCash','EasyPaisa','Bank Transfer','Visa','MasterCard','PayPal'];
  method = this.methods[0];
  loading = false;

  showSuccess = false;
  successMsg = '';

  constructor(private route: ActivatedRoute, private pricing: PricingService, private payment: PaymentService, private sub: SubscriptionService, private router: Router) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('planId') || '';
    if (this.planIn) {
      this.plan = this.planIn;
    } else {
      this.plan = this.pricing.getPlan(id) || null;
    }
    this.addOns = this.pricing.getAddOns();
  }

  pay() {
    if (!this.plan) return;
    const amount = this.plan.priceMonthly + this.selectedAddOnsValue();
    this.loading = true;
    this.payment.processPayment(this.method, amount).subscribe(res => {
      this.loading = false;
      if (res.success) {
        // activate subscription with trial if available
        const now = new Date();
        const start = now.toISOString();
        const expiry = new Date(now.getTime() + ((this.plan.trialDays || 30) * 24 * 60 * 60 * 1000)).toISOString();
        this.sub.activatePlan({ planName: this.plan.name, credits: this.plan.creditsPerMonth, startDate: start, expiryDate: expiry, paymentMethod: this.method });
        // add add-on credits
        this.addSelectedAddOnCredits();
        // show success modal
        this.successMsg = 'Subscription activated successfully 🎉';
        this.showSuccess = true;
        // if used inline via parent, notify parent when modal closes
      } else {
        alert('Payment failed');
      }
    });
  }

  onSuccessClose() {
    this.showSuccess = false;
    // notify parent when used inline
    this.completed.emit();
    // also navigate only when used as standalone route
    if (!this.planIn) this.router.navigate(['/trending-today']);
  }

  selectedAddOnsValue() {
    return this.addOns.filter(a => this.selectedAddOns[a.id]).reduce((s,n) => s + n.price, 0);
  }

  addSelectedAddOnCredits() {
    this.addOns.filter(a => this.selectedAddOns[a.id]).forEach(a => this.sub.addCredits(a.credits));
  }
}
