import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { beerSelectors } from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class BeerService {
  beers: Beer[] = beersData;
  constructor(private store: Store) {}

  getBeersList() {
    return this.store.select(beerSelectors);
  }

  deleteBeer(item: Beer) {
    this.beers = this.beers.filter((beer) => beer.id !== item.id);
    console.log(this.beers);
  }
  generateId() {
    const maxId = Math.max(...this.beers.map((beer) => beer.id));
    return maxId + 1;
  }
  addBeer(beer: Beer) {
    this.beers.unshift(beer);
  }
}
