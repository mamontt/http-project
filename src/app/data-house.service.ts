import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HouseDescription, ServerData } from './classes';
import { ResourceLoader } from '@angular/compiler';


@Injectable()
export class DataHouseService {
  corsUrl: string = 'https://cors-anywhere.herokuapp.com/';
  
  constructor(private httpClient : HttpClient) {  }
  public getDataHouse(url: string): any {//!!!!any?
    return this.httpClient.get<ServerData>(this.corsUrl+url)
  }
  
}
