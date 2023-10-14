import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { CookieService } from 'ngx-cookie';


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
    private _cookieService: CookieService,
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
    /* viewIs: this.builder.control(false), */
  });

  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(
        (result) => {
          this.result = result;
          this.toastr.success('Registro Exitoso, por favor inicie sesión.');
          const dataLoginJSON = JSON.stringify(this.result);
          localStorage.setItem('warriors-club-session', dataLoginJSON);
          this._cookieService.put('warriors-club-session', this.dataLogin.accessToken);
          this.router.navigate(['home']);
          setTimeout(() => {
            window.location.reload();
          }, 100);
        },
        (error) => {
          if (error.status === 401) {
            console.error('Error 401 Unauthorized:', error);
            this.toastr.error('Por favor llene los campos correspondientes');
          } else {
            console.error('Error en la solicitud:', error);
            this.toastr.error('Se ha producido un error en la solicitud.');
          }
        }
      );
    } else {
      this.toastr.warning('Por favor llene los campos correspondientes.');
    }
  }

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.LoginUser(this.loginform.value).subscribe({
        next: (item) => {
          this.dataLogin = item;
          const dataLoginJSON = JSON.stringify(this.dataLogin);
          localStorage.setItem('warriors-club-session', dataLoginJSON);
          this._cookieService.put('warriors-club-session', this.dataLogin.accessToken);
          this.router.navigate(['home']);
          setTimeout(() => {
            window.location.reload();
          }, 100);
        },
        error: (error) => {
          if (error.status === 401) {
            console.error('Error 401 Unauthorized:', error);
            this.toastr.error('Credenciales incorrectas. Por favor, verifique su contraseña.');
          } else {
            console.error('Error en la solicitud:', error);
            this.toastr.error('El usuario no existe.');
          }
        },
      });
    } else {
      this.toastr.warning('Por favor ingrese datos válidos.');
    }
  }

}
