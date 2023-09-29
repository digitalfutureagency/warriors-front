import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadjsService } from './service/loadjs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { CustomerComponent } from './customer/customer.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from './layout/layout.module';
import { CookieModule } from 'ngx-cookie';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { PipesModule } from './pipes/pipe.module';
import { FilespopupComponent } from './filespopup/filespopup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UpdatepopupComponent,
    CustomerComponent,
    LandingComponent,
    ModalContentComponent,
    FilespopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    PipesModule,
    ToastrModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [LoadjsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
