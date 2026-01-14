import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DeviceService } from '../../core/services/device.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
declare const google: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('testimonialCards') testimonialCards!: ElementRef;

  public isMobile$!: Observable<boolean>;

  showPassword: boolean = false;
  private googleClient: any;
  private googleApiLoaded: boolean = false; // Prevent multiple API loads
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private router: Router,
  private title: Title,
  private meta: Meta,
  private deviceService: DeviceService) {
    this.isMobile$ = this.deviceService.isMobile$;
  }

  ngOnInit(): void {
    // SEO: set title and description (works both server & browser)
    this.title.setTitle('TubeyTrend — AI Video Idea Generator');
    this.meta.updateTag({ name: 'description', content: 'Generate trending YouTube video ideas, titles, hooks, and SEO-optimized descriptions using AI.' });
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleAPI();
    }
  }

  scrollLeft() {
    this.testimonialCards.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.testimonialCards.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
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
            console.error("Google Sign-In Failed:", response);
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


    generateVideoIdeas(){
       this.router.navigate(['/pricing']);
      }
      exploreKeywords(){
        this.router.navigate(['/pricing']);
      }
      findVideoIdeas(){
        this.router.navigate(['/pricing']);
      }
}
