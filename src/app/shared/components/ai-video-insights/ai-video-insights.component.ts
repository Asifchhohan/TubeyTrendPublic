import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-ai-video-insights',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './ai-video-insights.component.html',
  styleUrl: './ai-video-insights.component.scss'
})
export class AiVideoInsightsComponent {

}
