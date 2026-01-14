import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browser-extension',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './browser-extension.component.html',
  styleUrls: ['./browser-extension.component.scss']
})
export class BrowserExtensionComponent {
  public isMobile$!: Observable<boolean>;
  constructor(private deviceService: DeviceService) {
    this.isMobile$ = this.deviceService.isMobile$;
  }
}
