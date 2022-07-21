import { createAction, props } from '@ngrx/store';

export const deleteBeerActions = createAction(
  '[beer] delete beer',
  props<{ id: number }>()
);
