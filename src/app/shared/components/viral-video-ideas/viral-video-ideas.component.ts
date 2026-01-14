
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-viral-video-ideas',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './viral-video-ideas.component.html',
  styleUrl: './viral-video-ideas.component.scss'
})
export class ViralVideoIdeasComponent {

}
