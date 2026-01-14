import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UISettings {
  darkMode: boolean;
  enableIdeaSuggestions: boolean;
  emailNotifications: boolean;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private key = 'ui_settings_v1';
  private _settings$ = new BehaviorSubject<UISettings>(this.load());

  private load(): UISettings {
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem(this.key);
        if (raw) return JSON.parse(raw);
      }
    } catch {}
    return { darkMode: false, enableIdeaSuggestions: true, emailNotifications: true };
  }

  getSettings(): Observable<UISettings> { return this._settings$.asObservable(); }

  update(ch: Partial<UISettings>) {
    const cur = { ...this._settings$.value, ...ch };
    if (typeof window !== 'undefined') { localStorage.setItem(this.key, JSON.stringify(cur)); }
    this._settings$.next(cur);
  }
}