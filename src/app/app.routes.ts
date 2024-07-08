import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AddItemComponent } from './components/add-item/add-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'item', component: AddItemComponent },
];
