import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public isMobile$!: Observable<boolean>;

  email = '';
  password = '';
  showPassword = false;

  constructor(private router: Router, private authService: AuthService, private deviceService: DeviceService) {
    this.isMobile$ = this.deviceService.isMobile$;
  }

  ngOnInit(): void {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  login(): void {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    const email = this.email.trim().toLowerCase();

    if (email === 'asif@gmail.com' && this.password === 'asif') {
      // Frontend-only fixed token for local/dev usage (no backend involved)
      const FIXED_TOKEN = 'frontend-fixed-token-0001';
      
      // Save token to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('jwtToken', FIXED_TOKEN);
        localStorage.setItem('user_email', email);
      }

      // Navigate to the protected area
      this.router.navigate(['/trending-today']);
      return;
    }

    // Invalid credentials
    this.handleLoginError({ status: 400 });
  }

  private handleLoginError(error: any): void {
    console.error('Login failed:', error);
    if (error.status === 400) {
      alert('Invalid email or password.');
    } else if (error.status === 500) {
      alert('Server error. Please try again later.');
    } else {
      alert('An unexpected error occurred. Please try again.');
      console.error('Detailed error:', error);
    }
    this.password = ''; // Clear password field after failure
  }

  signInWithGoogle(): void {
    this.authService.signUpWithGoogle();
  }
}
