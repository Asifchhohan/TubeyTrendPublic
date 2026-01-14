import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pm-overlay" role="dialog" aria-modal="true">
      <div class="pm-card">
        <h3>Complete Payment</h3>
        <p class="muted">This is a demo payment flow — no real charges.</p>
        <label>Cardholder name <input [(ngModel)]="name" /></label>
        <label>Card number <input [(ngModel)]="card" placeholder="4242 4242 4242 4242" /></label>
        <div class="row">
          <label>Expiry <input [(ngModel)]="expiry" placeholder="MM/YY" /></label>
          <label>CVC <input [(ngModel)]="cvc" placeholder="123" /></label>
        </div>
        <div class="actions">
          <button class="btn" (click)="cancel()">Cancel</button>
          <button class="btn primary" (click)="pay()">Pay</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    '.pm-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:9999}',
    '.pm-card{background:#111;padding:18px;border-radius:12px;width:360px;border:1px solid #333}',
    '.pm-card h3{margin:0 0 8px}',
    '.muted{color:#9ca3af;font-size:13px;margin-bottom:8px}',
    'label{display:block;margin:8px 0;color:#e5e7eb}',
    'input{width:100%;padding:8px;border-radius:6px;background:#0f0f0f;border:1px solid #333;color:white}',
    '.row{display:flex;gap:8px}',
    '.actions{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}',
    '.btn{background:transparent;border:1px solid #333;color:#ddd;padding:6px 12px;border-radius:8px}',
    '.btn.primary{background:#3b82f6;border-color:#3b82f6;color:white}',
  ]
})
export class PaymentModalComponent {
  name = '';
  card = '';
  expiry = '';
  cvc = '';
  @Output() success = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  constructor(private sub: SubscriptionService) {}

  cancel() { this.cancelled.emit(); }

  pay() {
    // very light validation
    if (!this.name || !this.card) return;
    // For demo, find a plan stored in localStorage payment_plan_to_activate
    let pid: string | null = null;
    if (typeof window !== 'undefined') {
      pid = localStorage.getItem('payment_plan_to_activate');
    }
    if (pid) {
      this.sub.activatePlan(pid);
      if (typeof window !== 'undefined') { localStorage.removeItem('payment_plan_to_activate'); }
      this.success.emit(pid);
    } else {
      this.success.emit('');
    }
  }
}
