import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { houseActionsType, HouseOnSucsessedGet, HouseOnErroredGet, HouseSendParamsAction } from './reducers/houses/house.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { DataHouseService } from './data-house.service';
import { Observable, of } from 'rxjs';
import { ServerData, Params } from './classes';
import { Store, Action } from '@ngrx/store';
import { HouseState } from './reducers/houses/house.reducer';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private houseService: DataHouseService) {}



  @Effect()
  loadHouses$ = this.actions$
    .pipe(
      ofType(houseActionsType.sendParams),
      switchMap((act: HouseSendParamsAction) =>
        this.houseService.getDataHouse(act.payload.build())
          .pipe(
            map(obs => new HouseOnSucsessedGet(obs.response.listings)),
            catchError((obs) => of(new HouseOnErroredGet(obs.response.application_response_code)))
          )
      )
    );

  buildUrlFromParams(currentParams: Params): string {
    return currentParams.build();
  }

}
