import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-thumbnail-generator',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, FooterComponent, CommonModule],
  templateUrl: './ai-thumbnail-generator.component.html',
  styleUrl: './ai-thumbnail-generator.component.scss'
})
export class AiThumbnailGeneratorComponent {}
