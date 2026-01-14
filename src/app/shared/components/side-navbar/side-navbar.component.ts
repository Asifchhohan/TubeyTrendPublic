import { Component, ElementRef, ViewChild, Input, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule  } from '@angular/router';
import { DeviceService } from '../../../core/services/device.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {
  @Input() position: 'left' | 'right' = 'left';

  public isMobile$!: Observable<boolean>;
  public mobileOpen = false;

  menuItems: { name: string; path: string }[] = [
    { name: 'Overview', path: '/overview' },
    { name: 'Trending Video Ideas', path: '/viral-video-ideas' },
    { name: 'Trending Topics Finder', path: '/trending-topics-finder' },    
    { name: 'Title Generator', path: '/title-generator' },
    { name: 'Competitor Insights', path: '/competitor-insights' },
    { name: 'Content Optimizer', path: '/content-optimizer' },
    { name: 'AI Thumbnail Generator', path: '/ai-thumbnail-generator' },
    { name: 'Channel Name Generator', path: '/channel-name-generator' },
    { name: 'Content Generator', path: '/content-generator' },
    { name: 'ChatGPT for YouTubers', path: '/chatgpt-for-youtubers' },
    { name: 'Audience Engagement Predictions', path: '/audience-engagement-predictions' },
    { name: 'SEO-Optimized Descriptions', path: '/seo-optimized-descriptions' },
    { name: 'Trending Keywords & Hashtags', path: '/trending-keywords-hashtags' },
    { name: 'Video Script Creator', path: '/video-script-creator' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Extension', path: '/extension' },
    { name: 'Views', path: '/blog/views' },
    { name: 'Monetization', path: '/blog/monetization' },
    { name: 'Subscribers', path: '/blog/subscribers' },
    { name: 'Analytics', path: '/blog/analytics' },
    { name: 'Tips & Insights', path: '/blog/all-tips-insights' },
  ];

  // activeItem: string = this.menuItems[0].path; // Default active path
  activeItem: string = '';
  private scrollPosition = 0;

  @ViewChild('sidebar') sidebar!: ElementRef;

  // Footer-aware placement helpers
  private footerEl: HTMLElement | null = null;
  private onScrollHandler: (() => void) | null = null;
  private onResizeHandler: (() => void) | null = null;

  constructor(private router: Router, private deviceService: DeviceService, private ngZone: NgZone) {
    this.isMobile$ = this.deviceService.isMobile$;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeItem = event.urlAfterRedirects;
        // After route changes, ensure the active menu item is visible
        setTimeout(() => {
          this.restoreScrollPosition(); // keep previous position if needed
          this.scrollActiveItemIntoView(); // but ensure active item is scrolled into view
        }, 50);
        // close mobile drawer on navigation
        this.mobileOpen = false;
      }
    });
  }

  ngAfterViewInit() {
    this.restoreScrollPosition(); // Restore position when component initializes
    // Ensure active item is visible on init
    setTimeout(() => this.scrollActiveItemIntoView(), 100);

    // Footer-aware positioning: set footer element and add listeners
    this.footerEl = document.querySelector('app-footer');

    // Use NgZone.runOutsideAngular to avoid frequent change detection on scroll
    this.ngZone.runOutsideAngular(() => {
      this.onScrollHandler = () => this.adjustSidebarForFooter();
      this.onResizeHandler = () => this.adjustSidebarForFooter();
      window.addEventListener('scroll', this.onScrollHandler!, { passive: true });
      window.addEventListener('resize', this.onResizeHandler!);
    });

    // initial position fix
    setTimeout(() => this.adjustSidebarForFooter(), 50);
  }

  ngOnDestroy() {
    // Clean up listeners
    if (this.onScrollHandler) window.removeEventListener('scroll', this.onScrollHandler);
    if (this.onResizeHandler) window.removeEventListener('resize', this.onResizeHandler);
  }

  /**
   * Adjusts the sidebar bottom offset so it does not overlap the footer when footer becomes visible.
   */
  private adjustSidebarForFooter() {
    if (!this.sidebar) return;
    const sidebarEl = (this.sidebar.nativeElement as HTMLElement);

    // default bottom offset (matches existing Tailwind bottom-10 -> 2.5rem = 40px in many setups; keep 10px fallback)
    const defaultBottomPx = 40; // a safe default for the fixed offset

    if (!this.footerEl) {
      // fallback to default if footer not found
      sidebarEl.style.bottom = `${defaultBottomPx}px`;
      return;
    }

    const footerRect = this.footerEl.getBoundingClientRect();
    const overlap = Math.max(0, window.innerHeight - footerRect.top);

    const bottomOffset = defaultBottomPx + overlap;
    // Apply inline bottom style to push the sidebar up by the overlap amount
    sidebarEl.style.bottom = `${bottomOffset}px`;
  }
  toggleMobileSidebar() {
    this.mobileOpen = !this.mobileOpen;
  }


  private scrollActiveItemIntoView() {
    if (!this.sidebar) return;
    // Use permissive typing for nativeElement to avoid strict DOM typing issues
    const container: any = this.sidebar.nativeElement;
    const activeEl: HTMLElement | null = container.querySelector('li.active');
    if (activeEl) {
      // Smoothly scroll the container so the active item is visible at the top
      const targetTop = activeEl.offsetTop - 8; // small padding
      if (typeof container.scrollTo === 'function') {
        try {
          container.scrollTo({ top: targetTop, behavior: 'smooth' });
        } catch (e) {
          container.scrollTop = targetTop; // fallback
        }
      } else {
        container.scrollTop = targetTop;
      }
    }
  }

  setActive(item: { name: string; path: string }, event: Event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Save current scroll position before navigating
    this.scrollPosition = (this.sidebar.nativeElement as any).scrollTop || 0;

    this.activeItem = item.path;
    this.router.navigateByUrl(item.path);

    // close mobile drawer on selection
    this.mobileOpen = false;
  }

  // Unified handler used by routerLink anchors to ensure consistent behavior on mobile and desktop
  onNavClick(item: { name: string; path: string }, event?: Event) {
    // let routerLink handle navigation; we only update state and close drawer
    if (event) {
      // prevent default in case an href is present
      event.preventDefault?.();
    }

    // Save current scroll position (desktop sidebar) before navigating
    if (this.sidebar) {
      this.scrollPosition = (this.sidebar.nativeElement as any).scrollTop || 0;
    }

    this.activeItem = item.path;

    // Close mobile drawer after selection
    this.mobileOpen = false;
  }

  restoreScrollPosition() {
    if (this.sidebar) {
      (this.sidebar.nativeElement as any).scrollTop = this.scrollPosition; // Restore scroll
    }
  }
}
