import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-centered-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="modal-backdrop" (click)="close.emit()">
    <div class="modal-panel" (click)="$event.stopPropagation()">
      <button class="close-btn" (click)="close.emit()">✕</button>
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./centered-modal.component.scss']
})
export class CenteredModalComponent {
  @Output() close = new EventEmitter<void>();
}
