import { Injectable } from '@angular/core';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
// import * as SockJS from 'stockjs-client';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient!: Client;
  private connected = false;

  constructor() {
    this.initializeWebSocketConnection().then(() => {
      console.log('WebSocket initialized');
      this.connected = true;
    });
    // this.initializeWebSocketConnection();
  }

  // private initializeWebSocketConnection() {
  //   const serverUrl = 'http://localhost:8080/ws';
  //   const ws = new SockJS(serverUrl);
  //   this.stompClient = Stomp.over(ws);

  //   this.stompClient.onConnect = (frame) => {
  //     console.log('Connected: ', frame);

  //     // Example subscription
  //     this.stompClient.subscribe('/channel/roomId', (message: IMessage) => {
  //       console.log(JSON.parse(message.body));
  //     });
  //   };

  //   this.stompClient.onStompError = (frame) => {
  //     console.log('Connection error: ', frame);
  //   };
  // }

  private createWebSocketConnection(): WebSocket {
    const serverUrl = 'http://localhost:8080/ws';
    return new SockJS(serverUrl);
  }

  public initializeWebSocketConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.stompClient = Stomp.over(() => this.createWebSocketConnection());

      this.stompClient.onConnect = (frame) => {
        console.log('Connected: ', frame);
        resolve();
      };

      this.stompClient.onStompError = (frame) => {
        console.log('Connection error: ', frame);
        reject();
      };

      this.stompClient.activate();
    });
  }

  public sendMessage(roomId: string, message: string) {

    if (this.connected) {
      let chatMessage = {
        sender: "OWNER",
        content: message,
        type: 'CHAT'
      };
      console.log("publish ", chatMessage)
      this.stompClient.publish({
        destination: `/app/chat/${roomId}`,
        headers: { priority: '9' },
        body: JSON.stringify(chatMessage),
      });
      // this.stompClient.publish({destination: `/app/chat/${roomId}`,  body: JSON.stringify(chatMessage)});
    } else {
      console.log('Not connected to the WebSocket');
    }
  }

  public subscribeToRoom(roomId: string, callback: (message: any) => void) {
    if (this.connected) {
      this.stompClient.subscribe(`/channel/${roomId}`, (message: IMessage) => {
        console.log("message receiverd", message.body)
        callback(JSON.parse(message.body));
      });
    } else {
      console.log('Not connected to the WebSocket');
    }
  }
}
