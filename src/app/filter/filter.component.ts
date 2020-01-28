import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

import {DataHouseService} from '../data-house.service';
import { Params } from '../classes'
import { from } from 'rxjs';
import { countryUrl } from '../objects';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [DataHouseService]
})

export class FilterComponent implements OnInit {

  public countryList :string[] = [];
  public myForm: FormGroup;
  private params: Params = new Params();
  
  @Output() onForm = new EventEmitter();


  constructor( private houseService : DataHouseService ) { 
    this.myForm = new FormGroup({
      "country": new FormControl("UK"),
      "location": new FormControl("London", [Validators.pattern("[a-zA-Z- ]{3,}"),
                                             Validators.required
                                            ]),//3 символа, буквы , обязательное 
      "minPrice": new FormControl("", Validators.pattern("[1-9][0-9]{0,}")),//-1 0
      "maxPrice": new FormControl("",[this.matchOtherValidator("minPrice"),Validators.pattern("[1-9][0-9]{0,}")])// >min
    });

    let i = 0;
    for(let country in countryUrl) {
      this.countryList[i] = country;
      i++;
    }
  }

  ngOnInit(): void {
    this.inputParams();
    this.sendUrlToApp();
  }
  

  private inputParam (key: string, value: string) {
    this.params.applyProp(key, value);
  }

  private inputParams(): void {

    for (let key in this.myForm.value) {
      
      if (key == "country") {
        this.params.applyCountry(this.myForm.value.country);
        continue;
      }
      this.inputParam(key,this.myForm.value[key])
    }
  }
  
  private deleteParams(): void {
    this.myForm.reset({country: "UK"});
    this.params.destroy();
  }
  
  
  private buildUrl(): string {
    return this.params.build();
  }

  private sendUrlToApp(): void {
    this.onForm.emit(this.buildUrl());
  }

  private matchOtherValidator (otherControlName: string): any{

    let thisControl: FormControl;
    let otherControl: FormControl;
  
    return function matchOtherValidate (control: FormControl): {[s:string]:boolean} {
  
      if (!control.parent) {
        return null;
      }
  
      // Initializing the validator.
      if (!thisControl) {
        thisControl = control;
        otherControl = control.parent.get(otherControlName) as FormControl;
        if (!otherControl) {
          throw new Error('matchOtherValidator(): other control is not found in parent group');
        }
        otherControl.valueChanges.subscribe(() => {
          thisControl.updateValueAndValidity();
        });
      }
  
      if (!otherControl) {
        return null;
      }
      if (!thisControl.value) { 
        return null
      }
      if ( +otherControl.value > +thisControl.value) {
        return {
          matchOther: true
        };
      }
  
      return null;
  
    }
  
  }


}