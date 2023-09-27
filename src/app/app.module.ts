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
import { TruncateTextPipe } from './pipes/truncate-text/truncate-text.pipe';
import { DateFormatPipe } from './pipes/date-format/date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    UpdatepopupComponent,
    CustomerComponent,
    LandingComponent,
    DateFormatPipe,
    TruncateTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    ToastrModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [LoadjsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
