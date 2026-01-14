import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';


@Component({
  selector: 'app-signup-free',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './signup-free.component.html',
  styleUrl: './signup-free.component.scss'
})
export class SignupFreeComponent {

}
