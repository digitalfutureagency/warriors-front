import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com';
  /* apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com'; */
  /* https://vp2hbl0k-8080.use2.devtunnels.ms */

  constructor(private http: HttpClient) { }

  /* Register User */
  UploadImage(token: any) {
    return this.http.post(this.apiurl + '/api/test/upload', token)
  }

  /* Get list of files */
  GetListFiles(token: any) {
    const headers = new HttpHeaders({
      'Token': `${token}`
    });
    return this.http.get(this.apiurl + '/api/test/files', { headers: headers });
  }

  /* Download a file */
  RegisterUser(name: string, downloadFile: any) {
    return this.http.get(this.apiurl + '/api/test/files/' + name, downloadFile)
  }

  // Obtén el token JWT almacenado en sessionStorage
}
