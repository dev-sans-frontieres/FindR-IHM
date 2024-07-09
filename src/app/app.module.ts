import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Menu, MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { CompteComponent } from "./components/compte/compte.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
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
    CompteComponent
],
  declarations: [AppComponent, MainPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
