import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './brand-solutions.component.html',
  styleUrls: ['./brand-solutions.component.scss']
})
export class BrandSolutionsComponent {
  public isMobile$!: Observable<boolean>;
  constructor(private deviceService: DeviceService) {
    this.isMobile$ = this.deviceService.isMobile$;
  }
}
