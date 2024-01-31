import { Component, OnInit } from '@angular/core';
import { Pieza } from 'src/app/interfaces/pieza';
import { ajedrezService } from 'src/app/services/ajedrez.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

  constructor(private serviceWS: WebsocketService, private ajedrezService: ajedrezService){
    ajedrezService.asignarFichas()
  }

  tablero: Array<Array<Pieza>> = this.ajedrezService.tablero
  texto: string = ''
  idImagenAmover: string = ''

  ngOnInit(): void {
   /*this.serviceWS.joinRoom("ABC");
   this.listenerMensagge();*/
  }

  //obtenemos id de imagen que se va a mover
  dragStarted(event: any): void {
    console.log(event.event.srcElement.id)
    this.idImagenAmover = event.event.srcElement.id.replace("img_","")
  
  }
  //movemos pieza
  drop(event: any){
    var piezaAmover = this.idImagenAmover
    var piezaAreemplazar = event.event.srcElement.id.replace("img_","")
    this.ajedrezService.moverPieza(piezaAmover, piezaAreemplazar)
  }


/*
  listenerMensagge() {
    this.serviceWS.getDataSubject().subscribe((data) => {
      this.texto = data.message;
    });
  }

  message: string = ''
  sendMessage(){
    const chatMessage = {
      message: this.message,
      user: "1"
    }
   // this.ajedrezService.llamarBack(chatMessage)
    this.serviceWS.sendMessage("ABC",chatMessage);
  }*/

  getDescendingIndices(length: number): number[] {
    return Array.from({ length }, (_, i) => length - i - 1);
  }

  getAscendingIndices(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
