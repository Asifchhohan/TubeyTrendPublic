import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-optimizer',
  standalone: true,
  imports: [HeaderComponent,SideNavbarComponent,FooterComponent,CommonModule],
  templateUrl: './content-optimization-tips.component.html',
  styleUrl: './content-optimization-tips.component.scss'
})
export class ContentOptimizerComponent {

}


