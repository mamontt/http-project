import { Component } from '@angular/core';

// import {DataHouseService} from './data-house.service';
import { ServerData, Params } from './classes';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HouseState } from './reducers/houses/house.reducer';
import { HouseSendParamsAction } from './reducers/houses/house.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [/*DataHouseService*/]
})
export class AppComponent {
  constructor(/*private dataService: DataHouseService */private store$: Store<HouseState>) { }

  public dataHouse$: Observable<ServerData>;

  public getUrl(params: Params): void {
     // dispatch params
    // console.log(params);
    this.store$.dispatch(new HouseSendParamsAction(params));
  }
}
