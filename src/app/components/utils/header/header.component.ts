import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() readonly darkModeSwithced = new EventEmitter<boolean>();
  public switchMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  darkMode() {
    this.switchMode = !this.switchMode;
    this.darkModeSwithced.emit(this.switchMode);
  }
}
