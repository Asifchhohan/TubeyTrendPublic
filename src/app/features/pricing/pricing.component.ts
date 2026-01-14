import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { PricingService, Plan } from '../../core/services/pricing.service';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../core/services/subscription.service';
import { DeviceService } from '../../core/services/device.service';
import { Observable, Subscription } from 'rxjs';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ViewAllPlansComponent } from './view-all-plans/view-all-plans.component';
import { CenteredModalComponent } from './centered-modal/centered-modal.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CheckoutPageComponent, ViewAllPlansComponent, CenteredModalComponent, FooterComponent],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnDestroy {
  public isMobile$!: Observable<boolean>;
  private mobileSub?: Subscription;
  public mobileView = false; // boolean flag for mobile view state
  public mobileShowAllPlans = false; // mobile-specific toggle for viewing all plans

  get plans() { return this.pricing.getPlans(); }
  showInlineCheckout = false;
  showAllPlans = false;
  showModal = false;
  checkoutPlan: Plan | null = null;

  // toast state
  toastMessage = '';
  showToast = false;

  goToCheckout(planId: string) { this.openInlineCheckout(planId); }

  // mobile-friendly helper: toggle the mobile 'View all plans' state
  toggleMobileAllPlans() {
    this.mobileShowAllPlans = !this.mobileShowAllPlans;
    this.showAllPlans = this.mobileShowAllPlans;
    // ensure inline checkout is closed when toggling mobile all-plans
    if (this.mobileShowAllPlans) {
      this.showInlineCheckout = false;
      this.showModal = true;
    } else {
      this.showModal = false;
    }
  }

  startFree(planId: string) {
    const p: any = this.pricing.getPlan(planId);
    if (!p) return;
    const now = new Date();
    const start = now.toISOString();
    const expiry = new Date(now.getTime() + ((p.trialDays || 7) * 24 * 60 * 60 * 1000)).toISOString();
    this.subscriptionService.activatePlan({ planName: p.name, credits: p.creditsPerMonth, startDate: start, expiryDate: expiry, paymentMethod: 'trial' });
    // open the plan modal and show a side toast indicating trial started
    this.openInlineCheckout(planId);
    this.showToastMessage('Trial started — Subscription activated successfully 🎉');
  }
  constructor(private pricing: PricingService, private router: Router, private subscriptionService: SubscriptionService, private title: Title, private meta: Meta, private deviceService: DeviceService) {
    this.title.setTitle('TubeyTrend — Pricing');
    this.meta.updateTag({ name: 'description', content: 'Pricing Plans for TubeyTrend — AI Video Idea Generator. Choose a plan that unlocks credits and features to grow your channel.' });

    // mobile detection
    this.isMobile$ = this.deviceService.isMobile$;
    this.mobileSub = this.deviceService.isMobile$.subscribe(m => {
      this.mobileView = m;
      // reset mobile-specific UI when switching to desktop
      if (!m) {
        this.mobileShowAllPlans = false;
      }
    });
  }

  viewAll() { this.toggleAllPlans(); }

  openInlineCheckout(planId: string) {
    this.checkoutPlan = this.pricing.getPlan(planId) || null;
    this.showInlineCheckout = true;
    this.showAllPlans = false;
    this.showModal = true;
  }

  toggleAllPlans() {
    this.showAllPlans = !this.showAllPlans;
    this.showInlineCheckout = false;
    this.showModal = this.showAllPlans;
  }

  onCheckoutComplete() {
    // close modal and redirect to trending-today
    this.closeModal();
    this.router.navigate(['/trending-today']);
  }

  closeModal() {
    this.showModal = false;
    this.showInlineCheckout = false;
    this.showAllPlans = false;
  }

  showToastMessage(msg: string, duration = 3500) {
    this.toastMessage = msg;
    this.showToast = true;
    // auto-hide but keep modal open until user clicks OK
    setTimeout(() => this.showToast = false, duration);
  }

  toastOk() {
    this.showToast = false;
    this.closeModal();
    this.router.navigate(['/trending-today']);
  }

  ngOnDestroy(): void {
    if (this.mobileSub) { this.mobileSub.unsubscribe(); }
  }
}
