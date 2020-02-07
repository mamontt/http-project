import { Component, OnInit, Input} from '@angular/core';
import { HouseDescription } from '../classes';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent  {

  @Input() public houseData: HouseDescription;

}
