import { createReducer, on } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { BeerState } from '../model/state';
import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers = createReducer(initialBeerState);

export const deleteReduce = createReducer(
  initialBeerState,

  on(Actions.deleteBeerActions, (stateBeers, arg: { id: number }) => ({
    ...stateBeers,

    list: stateBeers.list.filter((beer) => beer.id != arg.id),
  })),
  on(Actions.addBeerActions, (state: BeerState, arg: { beer: Beer }) => {
    //state.list.push(arg.beer);
    return {
      state,
      list: [...state.list, arg.beer],
    };
  })
);

/* Non funzionante perchè NGRX ci blocca
function pushBeer(state: BeerState, beer: Beer): Beer[] {
  state.list.push(beer);
  return state.list;
}
*/
