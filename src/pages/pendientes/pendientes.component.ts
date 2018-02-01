import { Component, OnInit } from '@angular/core';
import {ListaDeseos} from '../../app/services/listadeseos.service';
import {NavController}from'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component';


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {

  constructor(private _listaDeseos:ListaDeseos, private _navControler:NavController){  }



  irAgregar(){
    this._navControler.push(AgregarComponent)
  }

  ngOnInit() {}
}
