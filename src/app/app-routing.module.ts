import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtaCorrienteComponent } from './pages/cta-corriente/cta-corriente.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { GirosComponent } from './pages/giros/giros.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'depositos', component: DepositosComponent},
  { path: 'prestamos', component: PrestamosComponent},
  { path: 'cta-corriente', component: CtaCorrienteComponent},
  { path: 'giros', component: GirosComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
