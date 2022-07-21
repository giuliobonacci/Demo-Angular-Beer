import { createReducer, on } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers = createReducer(initialBeerState);

export const deleteReduce = createReducer(
  initialBeerState,

  on(Actions.deleteBeerActions, (stateBeers, arg: { id: number }) => ({
    ...stateBeers,

    list: stateBeers.list.filter((beer) => beer.id != arg.id),
  }))
);
