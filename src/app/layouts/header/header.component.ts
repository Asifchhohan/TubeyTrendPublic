import { Component, Input } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DeviceService } from '../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDropdownVisible = false;
  @Input() isSignupFreePage: boolean = false;

  public isMobile$!: Observable<boolean>;
  public mobileMenuOpen = false;

  // Mobile dropdown state (Features, AI Tools, Blog)
  public mobileSectionsOpen: { features: boolean; aiTools: boolean; blog: boolean } = {
    features: false,
    aiTools: false,
    blog: false
  };

  constructor(private router: Router, private deviceService: DeviceService) {
    this.isMobile$ = this.deviceService.isMobile$;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Close all mobile sections when menu closes
    if (!this.mobileMenuOpen) {
      this.mobileSectionsOpen = { features: false, aiTools: false, blog: false };
    }
  }

  toggleMobileSection(section: 'features' | 'aiTools' | 'blog') {
    // Toggle target and close others for simpler UX
    this.mobileSectionsOpen = {
      features: section === 'features' ? !this.mobileSectionsOpen.features : false,
      aiTools: section === 'aiTools' ? !this.mobileSectionsOpen.aiTools : false,
      blog: section === 'blog' ? !this.mobileSectionsOpen.blog : false,
    };
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

  private closeMobileMenuAndNavigate(path: string) {
    this.mobileMenuOpen = false;
    this.mobileSectionsOpen = { features: false, aiTools: false, blog: false };
    this.router.navigate([path]);
  }

  navigateToLogin() {
    this.closeMobileMenuAndNavigate('/login');
  }
  navigateToHome(){
    this.closeMobileMenuAndNavigate('/home');
  }

  navigateToTopChannels(){
    this.closeMobileMenuAndNavigate('/Top-trending-youtube-channels');
  }

  navigateToPricing(){
    this.closeMobileMenuAndNavigate('/pricing');
  }

}

