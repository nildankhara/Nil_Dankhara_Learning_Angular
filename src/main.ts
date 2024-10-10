import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes}  from "@angular/router";
import {BikeListComponent} from "./app/bike-list/bike-list.component";
import {BikeListItemComponent} from "./app/bike-list-item/bike-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";



const routes: Routes = [
  { path: 'bikes', component: BikeListComponent },
  { path: 'bikes/:number', component: BikeListItemComponent},
  { path: 'modify-bike', component: ModifyListItemComponent},
  { path: '*', component: PageNotFoundComponent}

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
