import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-careers-designer',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="container">
      <h1>Product Designer</h1>
      <p>Responsibilities: UX flows, prototyping, design systems and creator-first experiences.</p>
      <a routerLink="/careers" class="back">Back to careers</a>
    </main>
    <app-footer></app-footer>
  `,
})
export class CareersProductDesignerComponent { public isMobile$!: Observable<boolean>; constructor(private device: DeviceService) { this.isMobile$ = this.device.isMobile$; }}
