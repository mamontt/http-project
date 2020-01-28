import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// , FormGroup, FormControl, Validators
// import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { DataHouseService } from './data-house.service';
import { HouseComponent } from './house/house.component';
import { FilterComponent } from './filter/filter.component';
import { UpperPipe } from './pipes/upper.pipe';
import { RentPipe } from './pipes/rent.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    HouseComponent,
    FilterComponent,
    UpperPipe,
    RentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // FormGroup,
    // FormControl,
    // Validators
  ],
  providers: [DataHouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
