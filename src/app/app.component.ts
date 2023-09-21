import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoadjsService } from '../app/service/loadjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Warriors Club';
  isadmin = false;
  isMenuVisible = false;
  constructor(private route: Router, private loadjsservic: LoadjsService) {
    let role = sessionStorage.getItem('role');
    loadjsservic.carga(['jquery-3.2.1.min'])
    loadjsservic.carga(['modernizr'])
    loadjsservic.carga(['main'])
    loadjsservic.carga(['pace.min'])
    loadjsservic.carga(['plugins'])
    if (role == 'admin') {
      this.isadmin = true;
    }
  }


  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role = sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    } else {
      this.isadmin = false;
    }
  }
}
