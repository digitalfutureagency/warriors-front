import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public access: any = 'not';
  showDropdown: boolean = false;

  constructor(private service: AuthService, private router: Router) {
    this.access = sessionStorage.getItem('accessToken');
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    console.log('entre')
    this.service.LogoutUser(this.access)
    sessionStorage.removeItem("accessToken");
    this.router.navigate(['landing']);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
