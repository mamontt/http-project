import { createFeatureSelector, createSelector } from '@ngrx/store';
import { houseNode, HouseState} from './house.reducer';
import { HouseDescription, Params } from 'src/app/classes';

export const selectHouseFeature = createFeatureSelector<HouseState>(houseNode);

export const selectHouses = createSelector(
    selectHouseFeature,
    (state: HouseState): HouseDescription[] => state.houses
);
