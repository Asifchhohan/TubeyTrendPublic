import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeviceService } from '../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public isMobile$!: Observable<boolean>;

  public mobileSectionsOpen: { company: boolean; product: boolean; other: boolean } = {
    company: false,
    product: false,
    other: false
  };

  constructor(private deviceService: DeviceService) {
    this.isMobile$ = this.deviceService.isMobile$;
  }

  toggleSection(section: 'company' | 'product' | 'other') {
    this.mobileSectionsOpen = {
      company: section === 'company' ? !this.mobileSectionsOpen.company : false,
      product: section === 'product' ? !this.mobileSectionsOpen.product : false,
      other: section === 'other' ? !this.mobileSectionsOpen.other : false,
    };
  }
}

