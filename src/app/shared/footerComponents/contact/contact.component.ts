import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  submitted = false;

  submit(form: any) {
    this.submitted = true;
    if (form.valid) {
      console.log('Contact submit', this.formData);
      alert('Thanks — message submitted (dummy).');
      form.resetForm();
      this.submitted = false;
    }
  }
}
