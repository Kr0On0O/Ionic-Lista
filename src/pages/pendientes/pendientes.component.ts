import { Component, OnInit } from '@angular/core';
import {ListaDeseos} from '../../app/services/listadeseos.service';
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseos) {  }

  ngOnInit() {}
}
