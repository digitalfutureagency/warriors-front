import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl='https://s1k1fvs5-8080.use2.devtunnels.ms';

  constructor(private http:HttpClient, private _cookieService: CookieService) { 

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

  Getall(){
    return this.http.get(this.apiurl);
  }

  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }

  getuserrole(){
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
  }
  
}
