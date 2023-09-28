import { Component } from '@angular/core';
import { User } from '../model/usermodel';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie';
import { VimeoService } from '../service/vimeo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public token: any;
  public data: any;
  public dataUser: User | null = null;
  customerlist: any;
  dataSource: any;
  
  constructor(
    private toastr: ToastrService,
    private vimeoService: VimeoService,
    private _cookieService: CookieService
  ) {
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
    this.getAll()
  }

  getAll() {
    this.vimeoService.GetListVimeo().subscribe(res => {
      console.log(res)
    });
  }
}
