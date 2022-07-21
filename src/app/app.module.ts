import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerService } from './services/beer.service';
import { BeerComponent } from './components/beer/beer.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './model/state';
import { beerReducers } from './store/reducers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot<AppState>({ beerState: beerReducers }),
  ],
  providers: [BeerService],
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerFormComponent,
    BeerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
