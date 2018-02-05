import { Pipe, PipeTransform } from '@angular/core';
import {Listas,ListaItem} from '../clases/index';


@Pipe({
  name:'pendientes',
  pure:false
})
export class PendientesPipe implements PipeTransform {
  transform(listas:Listas[],completa:boolean=false): Listas[] {
    let nuevaLista:Listas[]=[];
    for(let lista of listas){
      if(lista.terminado==completa){
        nuevaLista.push(lista);
      }
    }
    return nuevaLista;
  }
}
