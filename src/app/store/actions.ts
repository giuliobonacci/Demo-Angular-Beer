import { createAction, props } from '@ngrx/store';
import { Beer } from '../model/model';

export const deleteBeerActions = createAction(
  '[beer] delete beer',
  props<{ id: number }>()
);

export const addBeerActions = createAction(
  '[beer] add beer',
  props<{ beer: Beer }>()
);
