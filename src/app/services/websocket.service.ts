import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { BehaviorSubject, Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient: any;
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() {
    this.initConnectionSocket()
   }

   initConnectionSocket(){
    const url = "//localhost:3000/chat-socket"
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket)
   }

   joinRoom(roomId: string){
    this.stompClient.connect({}, ()=>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);
        console.log(messageContent);
         // Notifica a los suscriptores que los datos han sido actualizados
         this.dataSubject.next(messageContent);
      })
    })
   }

   // Método para obtener los datos actuales (puedes usar este método en tu componente)
  getDataSubject(){
    return this.dataSubject.asObservable();
  }


   // Método para enviar un mensaje al servidor WebSocket
  public sendMessage(roomId: string, chatMessage: any ): void {
    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
  }

  

}
