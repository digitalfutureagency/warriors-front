import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhastappComponent } from './whastapp/whastapp.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WhastappComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    WhastappComponent
  ]
})
export class LayoutModule { }
