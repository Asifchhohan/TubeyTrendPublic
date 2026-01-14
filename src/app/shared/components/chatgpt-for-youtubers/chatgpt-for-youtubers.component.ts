import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatgpt-for-youtubers',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, FooterComponent, CommonModule],
  templateUrl: './chatgpt-for-youtubers.component.html',
  styleUrl: './chatgpt-for-youtubers.component.scss'
})
export class ChatgptForYoutubersComponent {}
