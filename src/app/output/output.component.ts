import { Component, OnInit, Input } from '@angular/core';


import { HouseDescription, ServerData } from '../classes';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  providers: []
})
export class OutputComponent implements OnInit{
  constructor( ) { };
  ngOnInit(){ }
  
  @Input() public dataFromServer$: Observable<ServerData>;
}
