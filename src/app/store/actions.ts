import { createAction, props } from '@ngrx/store';

export const deleteBeer = createAction(
  '[beer] delete beer',
  props<{ id: number }>()
);
