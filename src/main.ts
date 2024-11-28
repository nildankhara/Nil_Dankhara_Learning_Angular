import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes}  from "@angular/router";
import {BikeListComponent} from "./app/bike-list/bike-list.component";
import {BikeListItemComponent} from "./app/bike-list-item/bike-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



const routes: Routes = [
  {path:'',redirectTo:'/bikes',pathMatch:'full'}, // Default route eagerly loaded
  { path: 'bikes', component: BikeListComponent },
  { path: 'bikes/:number', loadComponent: () =>
      import('./app/bike-list/bike-list.component').then(m => m.BikeListComponent)},
  { path: 'modify-bike', loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  { path: 'modify-bike/:number', component: ModifyListItemComponent},
  { path: '*', loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
}).then(r => console.log('Bootstrap successful'));
