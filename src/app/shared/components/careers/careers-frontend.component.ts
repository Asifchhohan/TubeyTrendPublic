import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-careers-frontend',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="container">
      <h1>Frontend Engineer</h1>
      <p>Responsibilities: Angular, TypeScript, responsive UI, performance optimizations.</p>
      <a routerLink="/careers" class="back">Back to careers</a>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .container{max-width:900px;margin:0 auto;padding:24px}
    .back{display:inline-block;margin-top:12px}
  `]
})
export class CareersFrontendComponent { public isMobile$!: Observable<boolean>; constructor(private device: DeviceService) { this.isMobile$ = this.device.isMobile$; }}
