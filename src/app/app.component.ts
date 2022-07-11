import { Component } from '@angular/core';
import { IOptsNavbar } from './interfaces/IOptsNavbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones: IOptsNavbar [] = [
    { 
      path: '/home',
      name: 'Home'
    },
    {
      path: '/depositos',
      name: 'Depositos'
    },
    {
      path: '/prestamos',
      name: 'Prestamos'
    },
    {
      path: '/giros',
      name: 'Giros'
    },
    {
      path: '/cta-corriente',
      name: 'Cuenta Corriente'
    }
  ];
  title = 'Angular BCO';
}
