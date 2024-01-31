import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pieza } from '../interfaces/pieza';
import { FichasService } from './fichas.service';

@Injectable({
  providedIn: 'root'
})
export class ajedrezService {

  constructor(private http: HttpClient, private fichasService: FichasService) { }
  url: string = "http://localhost:3000/ajedrez/moverPieza"

  //API-REST
  llamarBack(chatMessage: any){
    this.http.post(this.url, chatMessage, {}).subscribe((data)=>{
      console.log(data)
    })
  }

  tablero: Array<Array<any>> = Array.from({ length: 8 }, () => Array(8).fill(null));

  asignarFichas(){
    
    for (let fila = 0; fila < 8; fila++) {
      for (let columna = 0; columna < 8; columna++) {
        switch( fila ) {
          case 0:
            this.tablero[fila][columna] = this.fichasService.piezasNegras[columna]
          break;
          case 1:
            this.tablero[fila][columna] = this.fichasService.peonNegro
          break;
          case 6:
            this.tablero[fila][columna] = this.fichasService.peonBlanco
          break;
          case 7:
                this.tablero[fila][columna] = this.fichasService.piezasBlancas[columna]
          break;
       }
        
      }
    }

    console.log("fichas asignadas")

  }

  moverPieza(idAmover: string, idAreemplazar: string){
    var xAmover: any = Number(idAmover.substring(0,1))
    var yAmover: any = Number(idAmover.substring(2,3))
    var xReemplazar: any = Number(idAreemplazar.substring(0,1))
    var yReemplazar: any = Number(idAreemplazar.substring(2,3))
    var piezaAmover: Pieza = this.tablero[xAmover][yAmover]
    this.tablero[xReemplazar][yReemplazar] = piezaAmover
    this.tablero[xAmover][yAmover] = null
  }
}
