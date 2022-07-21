import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { beersData } from '../../data/beer-list';
import { Beer } from '../../model/model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  constructor(public beerService: BeerService) {
    this.beerList = beerService.getBeersList();
  }
  beerList: Observable<Beer[]>;

  ngOnInit() {}
}
