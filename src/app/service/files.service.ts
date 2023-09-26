import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com';

  constructor(private http: HttpClient, private _cookieService: CookieService) { }
  /*  // Upload file
  app.post("/api/test/upload", [authJwt.verifyToken], controller.uploadFile);
  // Get list of files
  app.get("/api/test/files", [authJwt.verifyToken], controller.getListFiles);
  // Download a file
  app.get("/api/test/files/:name", [authJwt.verifyToken], controller.downloadFile); */

  /* Register User */
  UploadImage(token: any) {
    return this.http.post(this.apiurl + '/api/test/upload', token)
  }

  /* Get list of files */
  GetListFiles(token: string) {
    const url = `${this.apiurl}/api/test/files?${token}`;
  
    return this.http.get(url);
  }
  /* Download a file */
  RegisterUser(name: string, downloadFile: any) {
    return this.http.get(this.apiurl + '/api/test/files/' + name, downloadFile)
  }

  // Obtén el token JWT almacenado en sessionStorage
}
