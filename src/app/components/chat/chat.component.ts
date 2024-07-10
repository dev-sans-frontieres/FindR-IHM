import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client as StompClient, Message, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { WebSocketService } from '../../service/web-socket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  @Input('idChat') idChat?: string | null;
  public messageContent?: string;
  public messages: any[] = [];



  constructor(private route: ActivatedRoute, private http: HttpClient, private webSocketService: WebSocketService) {


  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.idChat = params.get('idChat');
      if (this.idChat !== null) {
        console.log('idChat = ', this.idChat);
      }
    });


    this.http.get<string[]>(`http://localhost:8080/rooms/${this.idChat}/messages`)
      .subscribe(
        (data) => {
          this.messages = data;
          console.log('Messages loaded:', this.messages);
        },
        (error) => {
          console.error('Error loading messages:', error);
        }
      );

      this.webSocketService
        .initializeWebSocketConnection()
        .then(() => {
          this.webSocketService.subscribeToRoom(
            this.idChat ? this.idChat : 't',
            (message) => {
              // Проверка на уникальность сообщения по id
              console.log(
                'in component webSocketService.initializeWebSocketConnection() MESSAGE',
                message
              );
              if (!this.messages.some((e) => e.id === message.id)) {
                this.messages.push(message);
              }
            }
          );
        })
        .catch((error) => {
          console.error('WebSocket connection error:', error);
        });


      // this.webSocketService.subscribeToRoom(this.idChat ? this.idChat:  "t", (message) => {
      //   console.log('Received message in components :', message);
      //   this.messages.push(message);
      // });




  }

  sendMessage() {
    if (this.messageContent) {
      this.webSocketService.sendMessage(this.idChat ? this.idChat:  "t", this.messageContent );
      this.messageContent = '';

      // this.webSocketService.subscribeToRoom(this.idChat ? this.idChat:  "t", (message: any) => {
      //   console.log('Received message in components::sendMessage:', message);
      //   this.messages.find(e => e.id === message.id)
      //   this.messages.push(message);
      // });
    }
  }

}
