import { Component } from '@angular/core';

import {DataHouseService} from './data-house.service';
import { ServerData } from './classes';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataHouseService]
})
export class AppComponent {
  constructor(private dataService: DataHouseService ) { }

  private urlToService: string;
  public dataHouse$: Observable<ServerData>;

  public getUrl(url: string): void {
    this.urlToService = url;
    console.log(this.urlToService);
    this.getDataFromServer();
  }
  private getDataFromServer(): void {
    this.dataHouse$ = this.dataService.getDataHouse(this.urlToService);
  }
}
