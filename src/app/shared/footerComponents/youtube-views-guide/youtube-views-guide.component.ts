import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';

@Component({
  selector: 'app-youtube-views-guide',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './youtube-views-guide.component.html',
  styleUrls: ['./youtube-views-guide.component.scss']
})
export class YoutubeViewsGuideComponent {}
