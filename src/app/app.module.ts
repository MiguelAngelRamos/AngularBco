import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { HomeComponent } from './pages/home/home.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CtaCorrienteComponent } from './pages/cta-corriente/cta-corriente.component';
import { GirosComponent } from './pages/giros/giros.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    HomeComponent,
    DepositosComponent,
    PrestamosComponent,
    CtaCorrienteComponent,
    GirosComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
