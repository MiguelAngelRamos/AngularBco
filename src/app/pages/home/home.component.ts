import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  public title: string = 'Cuenta Corriente';
  public headersTable: string [] = ['Saldo', 'Estado'];
  public saldo: number = 0;
  public estado: string = 'Sin estado'; // activa 
  public status: boolean = false;

  opcionesBtnAumentar = {
    color: 'btn btn-primary',
    titleBtn: 'Aumentar Saldo'
  }

  opcionesBtnDisminuir = {
    color: 'btn btn-danger',
    titleBtn: 'Disminuir Saldo'
  }

  opcionesBtnEstado = {
    color: 'btn btn-success',
    titleBtn: 'Cambiar Estado'
  }



  constructor() { }

  public aumentarSaldo() {
    this.saldo = this.saldo + 1000;
  }

  public disminuirSaldo() {
    this.saldo = this.saldo - 1000;
  }

  public cambiarEstado() {
    this.status = !this.status;
    // Operador ternario
    this.estado = this.status?'Activo':'Inactiva';

    // if(this.status) {
    //   this.estado = 'Activo';
    // } else {
    //   this.estado = 'Inactiva';
    // }
  }







}
