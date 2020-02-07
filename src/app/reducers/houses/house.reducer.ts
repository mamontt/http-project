import { HouseDescription } from 'src/app/classes';
import { HouseActions, houseActionsType } from './house.actions';

export const houseNode = 'house';

export interface HouseState {
    houses: HouseDescription[];
    error: string;
}
const initialState: HouseState = {
    houses : [],
    error: '',
};

export const houseReducer = (state = initialState, action: HouseActions) => {
    const { payload, type } = action as any;
    switch (type) {
        case houseActionsType.sendParams:
            return {
                ...state,
            };
        case houseActionsType.clear:
            return {
                ...state,
                houses: []
            };
        default:
            return state;
        case houseActionsType.onSucsess:
            console.log(payload);
            return {
                ...state,
                houses: payload,
            };
        case houseActionsType.onError:
            console.log(payload);
            return {
                ...state,
                houses: payload.application_response_code,
            };
    }
};
