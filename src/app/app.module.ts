import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Route, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu, MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { CompteComponent } from "./components/compte/compte.component";
import { CommonModule } from '@angular/common';
import { ChatbisComponent } from './components/chatbis/chatbis.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'chatbis', component: ChatbisComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    PanelModule,
    ButtonModule,
    AvatarModule,
    CardModule,
    MenuModule,
    RouterModule.forRoot(routes),
    SideBarComponent,
    CompteComponent,
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive
],
  declarations: [AppComponent, MainPageComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
