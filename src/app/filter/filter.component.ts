import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

import {DataHouseService} from '../data-house.service';
import { Params } from '../classes';
import { from } from 'rxjs';
import { countryUrl } from '../objects';
import { matchOtherValidator } from '../validators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [DataHouseService]
})

export class FilterComponent implements OnInit {

  public countryList: string[] = [];
  public myForm: FormGroup;
  private params: Params = new Params();
  @Output()Form = new EventEmitter();


  constructor( private houseService: DataHouseService ) {

    this.myForm = new FormGroup({
      country: new FormControl('UK'),
      location: new FormControl('London', [Validators.pattern('[a-zA-Z- ]{3,}'),
                                             Validators.required
                                            ]), // 3 символа, буквы , обязательное
      minPrice: new FormControl('', Validators.pattern('[1-9][0-9]*')), // -1 0
      maxPrice: new FormControl('', [ matchOtherValidator('minPrice'), Validators.pattern('[1-9][0-9]*')]) // >min
    });

    this.countryList = Object.keys(countryUrl);

  }

  ngOnInit(): void {
    this.inputParams();
    this.sendUrlToApp();
  }

  private inputParam(key: string, value: string) {
    this.params.applyProp(key, value);
  }

  private inputParams(): void {
      for (const key in this.myForm.value) {
        if (this.myForm.value.hasOwnProperty(key)) {
          if (key === 'country') {
            this.params.applyCountry(this.myForm.value.country);
            continue;
          }
          this.inputParam( key, this.myForm.value[key] );
        }
      }
  }

  public deleteParams(): void {
    this.myForm.reset({country: 'UK'});
    this.params.destroy();
  }


  private buildUrl(): string {
    return this.params.build();
  }

  private sendUrlToApp(): void {
    this.Form.emit(this.buildUrl());
  }

}
