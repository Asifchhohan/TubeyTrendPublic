import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-channel-name-generator',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, FooterComponent, CommonModule],
  templateUrl: './channel-name-generator.component.html',
  styleUrl: './channel-name-generator.component.scss'
})
export class ChannelNameGeneratorComponent {}
