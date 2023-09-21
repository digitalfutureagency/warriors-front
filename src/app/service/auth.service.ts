import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='https://warriors-backend-c2d2de5b1d70.herokuapp.com';

  /* Register User */
  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl + '/api/auth/signup/', inputdata)
  }

  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
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

  isloggedin(){
    return sessionStorage.getItem('username')!=null;
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
