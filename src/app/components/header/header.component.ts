import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public iconType: string = 'menu';

  constructor(public router: Router) {}
  
  public toggleMenuIcon(): void {
    this.iconType == 'menu' ? this.iconType = 'close' : this.iconType = 'menu';
  }
  
  public dropDownEvent(event: any): void {
    this.toggleMenuIcon();
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/')
  }
}
