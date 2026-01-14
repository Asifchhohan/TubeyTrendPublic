import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-performance-tracking-and-analytis',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './performance-tracking-and-analytis.component.html',
  styleUrl: './performance-tracking-and-analytis.component.scss'
})
export class PerformanceTrackingAndAnalytisComponent {

}

