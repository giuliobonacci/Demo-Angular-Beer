import { createReducer, on } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { BeerState } from '../model/state';
import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers = createReducer(initialBeerState);

export const deleteReducers = createReducer(
  initialBeerState,
  on(Actions.deleteBeerActions, (state: BeerState, args: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => beer.id != args.id),
  }))
);
