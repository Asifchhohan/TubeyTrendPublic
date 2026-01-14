import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SubscriptionService } from '../services/subscription.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private sub: SubscriptionService) {}

  canActivate(): boolean {
    // allow if AuthService says logged in OR subscription service reports a dummy logged in user
    if (this.authService.isLoggedIn() || this.sub.getSnapshot().isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
