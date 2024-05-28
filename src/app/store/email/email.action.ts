import { createAction, props } from '@ngrx/store';

export const setEmailid = createAction(
  '[Email] Set Emailid',
  props<{ emailid: string }>()
);

export const clearEmailid = createAction('[Email] Clear Emailid');