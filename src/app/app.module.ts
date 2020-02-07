import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppEffects } from './app.effects';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';
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
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot()
    // FormGroup,
    // FormControl,
    // Validators
  ],
  providers: [DataHouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }