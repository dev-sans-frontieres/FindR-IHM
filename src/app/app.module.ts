import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu, MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'item', component: AddItemComponent },
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
  ],
  declarations: [AppComponent, MainPageComponent, ProfilComponent, AddItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
