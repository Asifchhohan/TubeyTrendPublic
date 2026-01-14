import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface PaymentResult {
  success: boolean;
  id?: string;
  method?: string;
  amount?: number;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private lastPayment: PaymentResult | null = null;
  // simulate a payment call with a short delay
  processPayment(method: string, amount: number, metadata: any = {}): Observable<PaymentResult> {
    const res = { success: true, id: 'pay_' + Date.now(), method, amount } as PaymentResult;
    this.lastPayment = res;
    return of(res).pipe(delay(700));
  }

  getLastPayment() { return this.lastPayment; }
}
