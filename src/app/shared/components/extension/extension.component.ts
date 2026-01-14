import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [HeaderComponent, SideNavbarComponent, FooterComponent, CommonModule],
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.scss'
})
export class ExtensionComponent {}
