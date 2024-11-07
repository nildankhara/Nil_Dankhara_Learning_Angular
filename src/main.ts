import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { BikeListComponent } from './app/bike-list/bike-list.component';
import { BikeListItemComponent } from './app/bike-list-item/bike-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const routes: Routes = [
  { path: '', redirectTo: '/bikes', pathMatch: 'full' },
  { path: 'bikes', component: BikeListComponent },
  { path: 'bikes/:number', component: BikeListItemComponent },
  { path: 'modify-bike', component: ModifyListItemComponent },
  { path: 'modify-bike/:number', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }  // Correct wildcard route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }))
  ],
}).catch((err) => console.error(err));
