import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SideNavbarComponent,CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
