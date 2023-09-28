import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl='https://warriors-backend-c2d2de5b1d70.herokuapp.com';
  private token: any;
  /* apiurl = 'https://warriors-backend-c2d2de5b1d70.herokuapp.com'; */
  /* https://vp2hbl0k-8080.use2.devtunnels.ms */
  /*  */

  constructor(private http:HttpClient, private _cookieService: CookieService) { 
    this.token = this._cookieService.get('warriors-club-session');
    console.log(this.token)
  }

  /* Register User */
  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl + '/api/auth/signup/', inputdata)
  }

  /* Login User */
  LoginUser(logindata:any){
    return this.http.post(this.apiurl + '/api/auth/signin/', logindata);
  }

  /* Logout User */
  LogoutUser(logout:any){
    return this.http.post(this.apiurl + '/api/auth/signout/', logout);
  }
  
  /* Get Token */
  isloggedin(){
    return  this._cookieService.get('warriors-club-session')!=null;
  }

  /* Update Status */
  updateuser(userId:any, viewIs: any){
    const headers = new HttpHeaders({
      'Token': `${this.token}`
    });
    return this.http.put(this.apiurl + '/api/test/admin/userisview/' + userId, viewIs, { headers: headers });
  }

  Getall(){
    return this.http.get(this.apiurl);
  }

  /* getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }

  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }

  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  } */
  
}
