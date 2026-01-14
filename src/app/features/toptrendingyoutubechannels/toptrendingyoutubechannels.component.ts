import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layouts/header/header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { Router } from '@angular/router';
import { FormatCountPipe } from '../../shared/pipes/format-count.pipe';
import { DashboardcomponentService } from '../../services/dashboardcomponent.service';
import { TopChannel } from '../../shared/models/top-channel';
import { DeviceService } from '../../core/services/device.service';
import { Observable } from 'rxjs';
 
declare const google: any;

@Component({
  selector: 'app-toptrendingyoutubechannels',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent,FormatCountPipe],
  templateUrl: './toptrendingyoutubechannels.component.html',
  styleUrl: './toptrendingyoutubechannels.component.scss'
})
export class ToptrendingyoutubechannelsComponent {
  public isMobile$!: Observable<boolean>;

  searchQuery: string = '';
  private googleClient: any;
  private googleApiLoaded: boolean = false; // Prevent multiple API loads
  topChannels: TopChannel[] = [];
  
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
  private dashboardcomponentservice: DashboardcomponentService,
  private title: Title,
  private meta: Meta,
  private deviceService: DeviceService) {
      this.title.setTitle('Top Trending YouTube Channels - TubeyTrend');
      this.meta.updateTag({ name: 'description', content: 'Top trending YouTube channels — discover creators, view counts, and trending insights to inspire your next video.' });
      this.isMobile$ = this.deviceService.isMobile$;
  }
  trendingChannels = [
    { rank: 1, name: 'MrBeast', videos: 851, subscribers: 370, views: 74.39, image: 'assets/mrbeast.png' },
    { rank: 2, name: 'T-Series', videos: 22820, subscribers: 288, views: 287.74, image: 'assets/tseries.png' },
    { rank: 3, name: 'Cocomelon', videos: 1440, subscribers: 190, views: 198.33, image: 'assets/cocomelon.png' },
    { rank: 4, name: 'SET India', videos: 152130, subscribers: 182, views: 175.19, image: 'assets/setindia.png' },
    { rank: 5, name: 'Vlad and Niki', videos: 864, subscribers: 135, views: 103.18, image: 'assets/vladniki.png' },
    { rank: 6, name: 'Kids Diana Show', videos: 1320, subscribers: 131, views: 111.84, image: 'assets/diana.png' },
    { rank: 7, name: 'Like Nastya', videos: 928, subscribers: 126, views: 110.4, image: 'assets/nastya.png' },
    { rank: 8, name: 'Zee Music Company', videos: 13680, subscribers: 115, views: 75.05, image: 'assets/zee.png' },
    { rank: 9, name: 'Stokes Twins', videos: 349, subscribers: 115, views: 19.07, image: 'assets/stokes.png' },
    { rank: 10, name: 'MrBeast', videos: 851, subscribers: 370, views: 74.39, image: 'assets/mrbeast.png' },
    { rank: 11, name: 'T-Series', videos: 22820, subscribers: 288, views: 287.74, image: 'assets/tseries.png' },
    { rank: 12, name: 'Cocomelon', videos: 1440, subscribers: 190, views: 198.33, image: 'assets/cocomelon.png' },
    { rank: 13, name: 'SET India', videos: 152130, subscribers: 182, views: 175.19, image: 'assets/setindia.png' },
    { rank: 14, name: 'Vlad and Niki', videos: 864, subscribers: 135, views: 103.18, image: 'assets/vladniki.png' },
    { rank: 15, name: 'Kids Diana Show', videos: 1320, subscribers: 131, views: 111.84, image: 'assets/diana.png' },
    { rank: 16, name: 'Like Nastya', videos: 928, subscribers: 126, views: 110.4, image: 'assets/nastya.png' },
    { rank: 17, name: 'Zee Music Company', videos: 13680, subscribers: 115, views: 75.05, image: 'assets/zee.png' },
    { rank: 18, name: 'Stokes Twins', videos: 349, subscribers: 115, views: 19.07, image: 'assets/stokes.png' },
    { rank: 19, name: 'MrBeast', videos: 851, subscribers: 370, views: 74.39, image: 'assets/mrbeast.png' },
    { rank: 20, name: 'T-Series', videos: 22820, subscribers: 288, views: 287.74, image: 'assets/tseries.png' },
    { rank: 21, name: 'Cocomelon', videos: 1440, subscribers: 190, views: 198.33, image: 'assets/cocomelon.png' },
    { rank: 22, name: 'SET India', videos: 152130, subscribers: 182, views: 175.19, image: 'assets/setindia.png' },
    { rank: 23, name: 'Vlad and Niki', videos: 864, subscribers: 135, views: 103.18, image: 'assets/vladniki.png' },
    { rank: 24, name: 'Kids Diana Show', videos: 1320, subscribers: 131, views: 111.84, image: 'assets/diana.png' },
    { rank: 25, name: 'Like Nastya', videos: 928, subscribers: 126, views: 110.4, image: 'assets/nastya.png' },
    { rank: 26, name: 'Zee Music Company', videos: 13680, subscribers: 115, views: 75.05, image: 'assets/zee.png' },
    { rank: 27, name: 'Stokes Twins', videos: 349, subscribers: 115, views: 19.07, image: 'assets/stokes.png' },
    { rank: 28, name: 'MrBeast', videos: 851, subscribers: 370, views: 74.39, image: 'assets/mrbeast.png' },
    { rank: 29, name: 'T-Series', videos: 22820, subscribers: 288, views: 287.74, image: 'assets/tseries.png' },
    { rank: 30, name: 'Cocomelon', videos: 1440, subscribers: 190, views: 198.33, image: 'assets/cocomelon.png' },
    { rank: 31, name: 'SET India', videos: 152130, subscribers: 182, views: 175.19, image: 'assets/setindia.png' },
    { rank: 32, name: 'Vlad and Niki', videos: 864, subscribers: 135, views: 103.18, image: 'assets/vladniki.png' },
    { rank: 33, name: 'Kids Diana Show', videos: 1320, subscribers: 131, views: 111.84, image: 'assets/diana.png' },
    { rank: 34, name: 'Like Nastya', videos: 928, subscribers: 126, views: 110.4, image: 'assets/nastya.png' },
    { rank: 35, name: 'Zee Music Company', videos: 13680, subscribers: 115, views: 75.05, image: 'assets/zee.png' },
    { rank: 36, name: 'Stokes Twins', videos: 349, subscribers: 115, views: 19.07, image: 'assets/stokes.png' },
  ];


  filteredChannels = this.trendingChannels;


  ngOnChanges() {
    this.filteredChannels = this.trendingChannels.filter(channel =>
      channel.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }



  
    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.loadGoogleAPI();
      }
      this.fetchTopChannel();
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
  
      fetchTopChannel() {
        this.dashboardcomponentservice.getTopChannels().subscribe((data) => {
          this.topChannels = data;
        });
    }

}
