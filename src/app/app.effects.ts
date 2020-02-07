import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { houseActionsType, HouseOnSucsessedGet, HouseOnErroredGet, HouseSendParamsAction } from './reducers/houses/house.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DataHouseService } from './data-house.service';
import { Observable, of } from 'rxjs';
import { ServerData, Params } from './classes';
import { Store, Action } from '@ngrx/store';
import { HouseState } from './reducers/houses/house.reducer';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private houseService: DataHouseService, private store$: Store<HouseState>) {}

  url: string;
  public dataHouse$: Observable<ServerData>;

  @Effect()
  loadHouses$ = this.actions$
    .pipe(
      ofType(houseActionsType.sendParams),
      map((act: HouseSendParamsAction) =>{ debugger; 
        return this.houseService.getDataHouse(act.payload.build()).pipe(
        map(obs => (new HouseOnSucsessedGet(obs.response.listings))),
        catchError((obs) => of(new HouseOnErroredGet(obs.response.application_response_code))
        ))}
      )
    );


  buildUrlFromParams(currentParams: Params): string {
    return currentParams.build();
  }


}


// идельное рабочее место
// чем должна мотивировать компания
// как вы себя мотивируете
// чем вы занимаетесь в свободное время
// ваш уровень английского
