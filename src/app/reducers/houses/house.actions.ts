import { Action } from '@ngrx/store';
import { HouseDescription, Params, ServerData } from '../../classes';


export enum houseActionsType {
    sendParams = '[HOUSE] send params to build url for request',
    clear = '[HOUSE] clear current houselist',
    onSucsess = '[HOUSE] on sucsessed request',
    onError = '[HOUSE] on bad request'
}


export class HouseSendParamsAction implements Action {
    readonly type: string = houseActionsType.sendParams;
    constructor(public payload: Params) { }
}

export class HouseClearAction implements Action {
    readonly type: string = houseActionsType.clear;
}

export class HouseOnSucsessedGet implements Action {
    readonly type: string = houseActionsType.onSucsess;
    constructor(public payload: HouseDescription[]) { }
}
export class HouseOnErroredGet implements Action {
    readonly type: string = houseActionsType.onError;
    constructor(public payload: ServerData) { }
}

export type HouseActions = HouseSendParamsAction
    | HouseClearAction
    | HouseOnSucsessedGet
    | HouseOnErroredGet;



