import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { User } from 'src/app/model/usermodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public access: any = 'not';
  public currentphoto: string = '';
  public aplied: string = '';
  public dataUser: User | null = null;
  showDropdown: boolean = false;

  constructor(private service: AuthService, private router: Router, private _cookieService: CookieService) {
    this.access = this._cookieService.get('warriors-club-session');
    const userData = localStorage.getItem('warriors-club-session');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      this.dataUser = {
        _id: parsedUserData.id,
        email: parsedUserData.email,
        firstName: parsedUserData.firstName,
        lastName: parsedUserData.lastName,
        roles: parsedUserData.roles,
        viewIs: parsedUserData.viewIs
      };
    }
    if (this.dataUser?.email == 'ccamargo07@gmail.com') {
      this.aplied = "assets/images/avatars/cesar.png";
    } else if (this.dataUser?.email == 'heidy.parada@gmail.com') {
      this.aplied = "assets/images/avatars/heidy.jpg";
    } else if (this.dataUser?.email == 'elitewarriorsclub@gmail.com') {
      this.aplied = "assets/images/avatars/profile-admin.jpg";
    } else {
      this.aplied = "assets/images/avatars/profile_photo.png";
    }
    this.currentphoto = this.aplied;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    this.service.LogoutUser(this.access)
    this._cookieService.remove("warriors-club-session");
    localStorage.removeItem('warriors-club-session');
    this.router.navigate(['landing']);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  admin() {
    this.router.navigate(['user']);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

}
