import { Component, OnInit } from '@angular/core';
import {Listas,ListaItem}from '../../app/clases/index';


@Component({
  selector:'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  constructor() {  }
  nombreLista:string;
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
}
