import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { QrCodeModule } from 'ng-qrcode';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { AppComponent } from './app.component';
import { ChatFinderComponent } from './components/chat-finder/chat-finder.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatbisComponent } from './components/chatbis/chatbis.component';
import { CompteComponent } from "./components/compte/compte.component";
import { MainPageComponent } from './components/main-page/main-page.component';
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { WebSocketService } from './service/web-socket-service.service';

const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'chatbis', component: ChatbisComponent },
  { path: 'chat/:idChat', component: ChatComponent },
  { path: 'chat-finder/:idChat', component: ChatFinderComponent },
];

@NgModule({
  imports: [
    QrCodeModule,
    FormsModule,
    BrowserModule,
    PanelModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    MenuModule,
    RouterModule.forRoot(routes),
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [provideHttpClient(), WebSocketService],
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatComponent,
    ChatbisComponent,
    CompteComponent,
    SideBarComponent,
    ChatFinderComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
