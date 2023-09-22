import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public access: any = 'not';

  constructor() {
    this.access = sessionStorage.getItem('accessToken');
    console.log(this.access)
  }
}
