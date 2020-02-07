import { Component } from '@angular/core';

import { ServerData, Params, HouseDescription } from './classes';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HouseState } from './reducers/houses/house.reducer';
import { HouseSendParamsAction } from './reducers/houses/house.actions';
import { selectHouses } from './reducers/houses/house.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  constructor( private store$: Store<HouseState> ) { }
  public dataHouse$: Observable<HouseDescription[]> = this.store$.pipe(select(selectHouses));


  public getUrl(params: Params): void {
    this.store$.dispatch(new HouseSendParamsAction(params));
  }
}
