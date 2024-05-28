import { createReducer, on } from '@ngrx/store';
import * as EmailActions from './email.action';

export interface EmailState {
  emailid: string | null;
}

export const initialState: EmailState = {
  emailid: null,
};

export const emailReducer = createReducer(
  initialState,
  on(EmailActions.setEmailid, (state, { emailid }) => ({ ...state, emailid })),
  on(EmailActions.clearEmailid, (state) => ({ ...state, emailid: null }))
);
