import { Component, OnInit } from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Listas,ListaItem} from '../../app/clases/index';
import {ListaDeseos} from '../../app/services/listadeseos.service';
import {AlertController} from 'ionic-angular';
import {PendientesComponent} from '../pendientes/pendientes.component';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  idx:any;
  lista:Listas;
  constructor(public _navControler:NavController,
    public _navParams:NavParams,
     public _listaDeseos:ListaDeseos,
   public _alertController:AlertController) {
    this.idx=_navParams.get("index");
    this.lista=_navParams.get("lista");
    console.log(this.idx);
  }

  ngOnInit() {}



  actualizar(item:ListaItem){
    item.completo=!item.completo;
    let todosMarcados=true;
    for(let item of this.lista.Items){
      if(!item.completo){
        todosMarcados=false;
        break;
      }
    }
    this.lista.terminado=todosMarcados;
    this._listaDeseos.guardarStorage();

  }


  borrarItem(){
    let confirm = this._alertController.create({
     title: this.lista.nombre,
     message: 'Borrar Lista',
     buttons: ['Cancelar',
       {
         text: 'Aceptar',
         handler: () => {
           this._listaDeseos.borarLista(this.idx);
           this._navControler.pop();
         }
       }
     ]
   });
   confirm.present();
 }
 volverPendientes(){
   this._navControler.pop();
 }


}
