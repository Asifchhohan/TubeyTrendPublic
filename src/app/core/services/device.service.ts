import { Injectable, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService implements OnDestroy {
  private isBrowser: boolean;
  private _isMobile$ = new BehaviorSubject<boolean>(false);
  public isMobile$ = this._isMobile$.asObservable();

  private resizeSub?: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Default: non-mobile on server; if in browser, evaluate and listen to resizes
    if (this.isBrowser) {
      this.updateIsMobile();
      this.resizeSub = fromEvent(window, 'resize').subscribe(() => this.updateIsMobile());
    }
  }

  private updateIsMobile() {
    try {
      const w = window.innerWidth;
      this._isMobile$.next(w <= 768);
    } catch (e) {
      // On the safe side, don't change value if window access fails
    }
  }

  isMobileSync(): boolean {
    return this._isMobile$.value;
  }

  ngOnDestroy() {
    if (this.resizeSub) this.resizeSub.unsubscribe();
  }
}
