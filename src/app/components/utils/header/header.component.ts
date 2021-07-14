import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public switchMode: boolean = false;
  constructor() {}

  ngOnInit(): void {
    let mode = localStorage.getItem('darkMode') || 'disabled';
    this.switchMode = mode == 'disabled' ? false : true;
  }
  darkMode() {
    let state;
    this.switchMode = !this.switchMode;
    if (this.switchMode) {
      state = 'enabled';
    } else {
      state = 'disabled';
    }
    localStorage.setItem('darkMode', state);
    window.location.reload();
  }
}
