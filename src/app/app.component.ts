import { OverlayContainer } from '@angular/cdk/overlay';
import { HostBinding, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'country-app';
  @HostBinding('class') className = ''

  constructor(private overlay: OverlayContainer) { }

  ngOnInit(): void{
    let mode = localStorage.getItem('darkMode') || 'disabled'
    if(mode == 'enabled'){
      this.className = 'darkMode'
      this.overlay.getContainerElement().classList.add(this.className);
    } else{
      this.className = ''
    }
  }
}
