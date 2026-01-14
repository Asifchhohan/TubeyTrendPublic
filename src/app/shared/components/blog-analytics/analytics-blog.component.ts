import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-blog',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, FooterComponent, CommonModule],
  templateUrl: './analytics-blog.component.html',
  styleUrl: './analytics-blog.component.scss'
})
export class AnalyticsBlogComponent {}
