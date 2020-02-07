import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { HouseState, houseReducer, houseNode } from './houses/house.reducer';

export interface State {
  [houseNode]: HouseState;
}

export const reducers: ActionReducerMap<State> = {
  [houseNode]: houseReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
