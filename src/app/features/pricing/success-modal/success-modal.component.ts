import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  template: `
  <div class="modal-backdrop">
    <div class="modal success">
      <h3>Success</h3>
      <p>{{message}}</p>
      <div class="actions"><button (click)="close.emit()">OK</button></div>
    </div>
  </div>
  `,
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
  @Input() message = '';
  @Output() close = new EventEmitter<void>();
}
