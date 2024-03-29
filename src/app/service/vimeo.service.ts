import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {
  apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com';
  /* apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com'; */
  /* https://vp2hbl0k-8080.use2.devtunnels.ms */
  /*  */
  private token: any;

  

  constructor(private http: HttpClient, private _cookieService: CookieService) {
    this.token = this._cookieService.get('warriors-club-session');
  }

  /* Get list videos vimeo */
  GetListVideosVimeo(folderId: any) {
    const headers = new HttpHeaders({
      'Token': `${this.token}`
    });
    return this.http.get(this.apiurl + '/api/test/learning/' + folderId, { headers: headers } );
  }

}
