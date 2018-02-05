import { Injectable } from '@angular/core';
import {Listas} from '../clases/listas';
@Injectable()
export class ListaDeseos {
listas:Listas[]=[];

  constructor() {
    this.cargarStorage();


    console.log("Lista deseos funciona");

   }
   cargarStorage(){
     if(localStorage.getItem("data")){
     this.listas=JSON.parse(localStorage.getItem("data"));
      }
    }


   guardarStorage(){
     localStorage.setItem("data",JSON.stringify(this.listas));
   }

   guardarNueva(lista:Listas){
     this.listas.push(lista);
     this.guardarStorage();
   }
   borarLista(idx:number){
      this.listas.splice(idx,1);
      this.guardarStorage();

   }
}
