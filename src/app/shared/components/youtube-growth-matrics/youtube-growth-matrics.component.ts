import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube-growth-matrics',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './youtube-growth-matrics.component.html',
  styleUrl: './youtube-growth-matrics.component.scss'
})
export class YoutubeGrowthMatricsComponent {

}

