import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  template: `<div class="modal-backdrop">
    <div class="modal">
      <h3>Processing Payment</h3>
      <p>Please wait...</p>
      <button (click)="cancel.emit()">Cancel</button>
    </div>
  </div>`,
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent {
  @Output() cancel = new EventEmitter<void>();
}
