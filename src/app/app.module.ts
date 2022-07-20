import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerService } from './services/beer.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [BeerService],
  declarations: [AppComponent, BeerListComponent, BeerFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
