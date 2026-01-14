import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8002/api/Users/LoginUser'; // Login API
  private apiUrlSignup = 'http://localhost:8002/api/Users/Signup'; // Signup API
  private googleClient: any;
  private googleApiLoaded: boolean = false;
  userInfo: any = null; // To store user info

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleAPI();
    }
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}`, { email, password });
  }

  signup(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrlSignup, { email, password });
  }

  saveToken(token: string): void {
    if (typeof window !== 'undefined') { localStorage.setItem('jwtToken', token); }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  logout(): void {
    if (typeof window !== 'undefined') { localStorage.removeItem('jwtToken'); }
    this.router.navigate(['/login']); // Redirect to login on logout
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  handleLoginResponse(res: { token: string }): void {
    if (res?.token) {
      this.saveToken(res.token);
      alert('Login successful!');
      this.router.navigate(['/trending-today']);
    } else {
      alert('Login failed. Please try again.');
    }
  }

  signUpWithGoogle(): void {
    if (!this.googleClient) {
      console.error("Google OAuth client not initialized!");
      return;
    }
    this.googleClient.requestAccessToken();
  }

  
  
 private loadGoogleAPI(): void {
    if (this.googleApiLoaded) return;

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
    if (typeof window !== 'undefined' && (window as any).google?.accounts) {
      this.googleClient = (window as any).google?.accounts.oauth2.initTokenClient({
        client_id: '369129905407-blb0dp7so7rvve10gv63f24p60gg91l1.apps.googleusercontent.com',
        scope: 'openid email profile https://www.googleapis.com/auth/youtube.readonly',
        ux_mode: 'popup',
        callback: (response: any) => {
          if (response.access_token) {
            this.getUserInfo(response.access_token);
          } else {
            console.error("Google Sign-In Failed:", response);
          }
        }
      });
    }
  } 
  private getUserInfo(accessToken: string): void {
    debugger
    fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => response.json())
    .then(data => {
      this.userInfo = {
        name: data.name,
        email: data.email,
        picture: data.picture
      };
      console.log("User Info:", this.userInfo);
      this.getYouTubeChannel(accessToken);
    })
    .catch(error => console.error("Error fetching user info:", error));
  }
  private getYouTubeChannel(accessToken: string): void {
    fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => response.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        const channel = data.items[0];
        this.userInfo.channelName = channel.snippet.title;
        this.userInfo.channelId = channel.id; // ✅ Channel ID
  
        console.log("YouTube Channel Name:", this.userInfo.channelName);
        console.log("YouTube Channel ID:", this.userInfo.channelId);
      } else {
        console.log("No YouTube channel found for this user.");
      }
    })
    .catch(error => console.error("Error fetching YouTube channel:", error));
  }
}













