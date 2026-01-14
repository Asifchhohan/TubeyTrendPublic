import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [LoginComponent, FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements AfterViewInit {
  public isMobile$!: Observable<boolean>;

  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  private googleClient: any;
  private googleApiLoaded: boolean = false; // Prevent multiple API loads

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private authService: AuthService,
    private deviceService: DeviceService) {
      this.isMobile$ = this.deviceService.isMobile$;
    }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleAPI();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.googleApiLoaded) {
      this.initializeGoogleOAuth();
    }
  }

  private loadGoogleAPI(): void {
    if (this.googleApiLoaded) return; // Prevent multiple loads

    if (typeof window !== 'undefined' && (window as any).google?.accounts) {
      this.googleApiLoaded = true;
      this.initializeGoogleOAuth();
    } else if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.googleApiLoaded = true;
        this.initializeGoogleOAuth();
      };
      script.onerror = () => console.error("Google API script failed to load");
      document.head.appendChild(script);
    }
  }

  private initializeGoogleOAuth(): void {
    this.googleClient = google.accounts.oauth2.initCodeClient({
      client_id: '369129905407-blb0dp7so7rvve10gv63f24p60gg91l1.apps.googleusercontent.com',
      scope: 'openid email profile',
      ux_mode: 'popup', // Use 'redirect' if popup doesn't work
      callback: (response: any) => {
        if (response.code) {
          console.log("Authorization Code:", response.code);
          // Send the code to your backend to exchange for access & ID tokens
        } else {
          console.error("Google Sign-Up Failed:", response);
        }
      }
    });
  }
  signUpWithGoogle(): void {
    if (!this.googleClient) {
      console.error("Google OAuth client not initialized!");
      return;
    }

    this.googleClient.requestCode(); // Opens the Google sign-up popup
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  navigateToHome() {
    this.router.navigate(['/home']);
  }



  onSubmit(): void {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    this.authService.signup(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        alert('sign up successful!');
      },
      error: (error) => {
        console.error('sign up failed:', error);
        alert('Invalid email or password.');
      },
    });
  }
}

