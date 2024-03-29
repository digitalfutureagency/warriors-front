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
    if (role == 'admin') {
      this.isadmin = true;
    }
  }

  ngOnInit() {
    this.loadjsservic
      .load(['jquery-3.2.1.min'])
      .then(() => {
        return this.loadjsservic.load(['modernizr', 'main', 'pace.min']);
      })
      .then(() => {
        return this.loadjsservic.load(['modernizr', 'main', 'pace.min']);
      })
      .catch((error) => {
        console.error('Error al cargar los scripts:', error);
      });
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
