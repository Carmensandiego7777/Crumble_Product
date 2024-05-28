// email.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmailState } from './email.state';

export const selectEmailState = createFeatureSelector<EmailState>('email');

export const selectEmail = createSelector(
  selectEmailState,
  (state: EmailState) => state.email
);
