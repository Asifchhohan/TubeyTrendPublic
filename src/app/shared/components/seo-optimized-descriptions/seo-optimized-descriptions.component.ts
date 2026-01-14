import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seo-optimized-descriptions',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './seo-optimized-descriptions.component.html',
  styleUrl: './seo-optimized-descriptions.component.scss'
})
export class SeoOptimizedDescriptionsComponent {

}
