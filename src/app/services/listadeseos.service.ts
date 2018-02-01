import { Injectable } from '@angular/core';
import {Listas} from '../clases/listas';
@Injectable()
export class ListaDeseos {
listas:Listas[]=[];

  constructor() {
  let lista1=new Listas("Supermercado");
  let lista2=new Listas("Juegos");
  let lista3=new Listas("Estudios");
  this.listas.push(lista1);
  this.listas.push(lista2);
  this.listas.push(lista3);


    console.log("Lista deseos funciona");

   }


}
