import { Component, OnInit } from '@angular/core';
import {Listas,ListaItem}from '../../app/clases/index';
import { AlertController,NavController } from 'ionic-angular';
import {ListaDeseos} from '../../app/services/listadeseos.service';

@Component({
  selector:'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  constructor(public _alertController:AlertController,public _navController:NavController,public _listaDeseos:ListaDeseos) {  }


  nombreLista:string="";
  nombreItem:string="";
  items:ListaItem[]=[];

  ngOnInit() {}
  agregar(){
    if(this.nombreItem.length==0){
      return;
    }
    let item=new ListaItem();
    item.nombre=this.nombreItem;

    this.items.push(item);
    this.nombreItem="";
  }
  borraritem(index:number){
    this.items.splice(index,1);
  }
  agregarLista(){
    if(this.nombreLista.length==0){
      let alert = this._alertController.create({
  title: 'Nombre de la lista obligatorio',
  subTitle: 'Es necesario el nombre de la lista',
  buttons: ['Dismiss']
});
alert.present();
      return;
    }
    let lista=new Listas(this.nombreLista);
    lista.Items=this.items;

    this._listaDeseos.guardarNueva(lista);
    this._navController.pop();
    }
}
