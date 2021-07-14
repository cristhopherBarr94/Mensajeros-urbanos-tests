import { OverlayContainer } from '@angular/cdk/overlay';
import { HostBinding, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'country-app';
  isDark = false;

  @HostBinding('class')
  get themeMode() {
    let curTheme = 'ligthMode';
    if (this.isDark) {
      curTheme = 'darkMode';
      this.overlay.getContainerElement().classList.add('darkMode');
      return curTheme;
    }
    return curTheme;
  }

  constructor(private overlay: OverlayContainer) {}

  switchMode(isDarkMode: boolean) {
    this.isDark = isDarkMode;
  }
}
