import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignUpMode = false;

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
    sessionStorage.clear();
  }
  result: any;
  dataLogin: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  registerform = this.builder.group({
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    role: this.builder.control('user'),
    /* isactive: this.builder.control(false) */
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(result => {
        this.result = result;
        this.toastr.success('Registro Exitoso.')
        console.log(this.result.accessToken)
        sessionStorage.setItem('accessToken', this.result.accessToken);
        this.router.navigate(['home'])
      });
    } else {
      this.toastr.warning('Por favor llene los campos correspondientes.')
    }
  }

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.LoginUser(this.loginform.value).subscribe(item => {
        this.dataLogin = item;
        console.log(item);
        sessionStorage.setItem('accessToken', this.dataLogin.accessToken);
        this.router.navigate(['home']);
      });
    } else {
      this.toastr.warning('Por favor ingrese datos validos.')
    }
  }
}
