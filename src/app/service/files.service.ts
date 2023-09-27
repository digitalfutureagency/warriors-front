import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com';
  private token: any;
  /* apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com'; */
  /* https://vp2hbl0k-8080.use2.devtunnels.ms */

  constructor(private http: HttpClient, private _cookieService: CookieService) { 
    this.token = this._cookieService.get('warriors-club-session');
  }

  /* Upload Image */
  UploadImage(file: any) {
    const headers = new HttpHeaders({
      'Token': `${this.token}`
    });
    return this.http.post(this.apiurl + '/api/test/upload', file, { headers: headers })
  }

  /* Get list of files */
  GetListFiles(token: any) {
    const headers = new HttpHeaders({
      'Token': `${token}`
    });
    return this.http.get(this.apiurl + '/api/test/files', { headers: headers });
  }

  /* Download a file */
  DownloadFile(name: string) {
    const headers = new HttpHeaders({
      'Token': `${this.token}`
    });
    return this.http.get(this.apiurl + '/api/test/files/' + name, { headers: headers })
  }

  // Obtén el token JWT almacenado en sessionStorage
}
