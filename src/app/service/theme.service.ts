import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from '../themes/theme.config';
import { IThemeProperties } from '../themes/theme.interface';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {


  constructor(@Inject(DOCUMENT) private document: Document) {}

  getTheme(): string {
    return localStorage.getItem('themeSelect') || 'default';
  }

  setTheme(name: string): void {
    localStorage.setItem('themeSelect', name);
    const theme: IThemeProperties = (THEMES as any)[name];
    Object.keys(theme).forEach((key: string) => {
      this.document.documentElement.style.setProperty(
        `--${key}`,
        (theme as any)[key] 
      )
      
    });
  }

}
