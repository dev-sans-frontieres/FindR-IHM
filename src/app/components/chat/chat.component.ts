import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client as StompClient, Message, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { WebSocketService } from '../../service/web-socket-service.service';
import { Sender } from '../../service/sender.enum';
import { IMessageFindR } from '../../interfaces/message-find-r.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  @Input('idChat') idChat?: string | null;
  public messageContent?: string;
  public messages: IMessageFindR[] = [
    // {
    //   id: 6,
    //   roomId: 'f',
    //   content: 'je trouve',
    //   timestamp: 1720644920033,
    //   sender: Sender.FINDER,
    // },
    // {
    //   id: 7,
    //   roomId: 'f',
    //   content: 'MERCI',
    //   timestamp: 1720664950033,
    //   sender: Sender.OWNER,
    // },
    // {
    //   id: 8,
    //   roomId: 'f',
    //   content: 'OK',
    //   timestamp: 17206104990033,
    //   sender: Sender.FINDER,
    // },
    // {
    //   id: 9,
    //   roomId: 'f',
    //   content: 'OK',
    //   timestamp: 17206104990033,
    //   sender: Sender.FINDER,
    // },
    // {
    //   id: 10,
    //   roomId: 'f',
    //   content: 'OK',
    //   timestamp: 17206104990033,
    //   sender: Sender.FINDER,
    // },
    // {
    //   id: 11,
    //   roomId: 'f',
    //   content: 'OK',
    //   timestamp: 17206104990033,
    //   sender: Sender.FINDER,
    // },
  ];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.idChat = params.get('idChat');
      if (this.idChat !== null) {
        console.log('idChat = ', this.idChat);
      }
    });

    this.http
      .get<IMessageFindR[]>(`http://localhost:8080/rooms/${this.idChat}/messages`)
      // this.http.get<IMessageFindR[]>(`/rooms/${this.idChat}/messages`)
      .subscribe(
        (data: IMessageFindR[]) => {
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
      this.webSocketService.sendMessage(
        Sender.OWNER,
        this.idChat ? this.idChat : 't',
        this.messageContent
      );
      this.messageContent = '';

      // this.webSocketService.subscribeToRoom(this.idChat ? this.idChat:  "t", (message: any) => {
      //   console.log('Received message in components::sendMessage:', message);
      //   this.messages.find(e => e.id === message.id)
      //   this.messages.push(message);
      // });
    }
  }

}
