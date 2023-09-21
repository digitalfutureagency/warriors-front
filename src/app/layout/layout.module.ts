import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhastappComponent } from './whastapp/whastapp.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WhastappComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WhastappComponent
  ]
})
export class LayoutModule { }
