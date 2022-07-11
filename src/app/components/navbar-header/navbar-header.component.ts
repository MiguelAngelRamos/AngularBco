import { Component, Input, OnInit } from '@angular/core';
import { IOptsNavbar } from 'src/app/interfaces/IOptsNavbar';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  @Input() serviciosBco: IOptsNavbar []  = [];
  @Input() tituloNav: string = '';
  constructor() { }

  ngOnInit(): void {
  
  }

}
