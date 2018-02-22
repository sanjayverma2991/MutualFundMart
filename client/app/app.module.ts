import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing}  from './app.routing';

// angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material';

// categories
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailFormComponent} from './categories/categorydetails-form.component';
import {CategoryFilterPipe} from './categories/categories-filter.pipe';

// services
import { UsersService } from "./users/users.service";
import { CategoriesService } from './categories/categories.service';
import { PurchasesService } from "./purchases/purchases.service";

// users
import {ProfileFormComponent} from "./users/profile-form.component";
import {BuyerDeatilFormComponent} from './users/buyerdetail-form.component';

// purchases
import {ViewCartFormComponent} from './purchases/viewcart-form.component';
import {PurchaseHistoryFormComponent} from './purchases/purchasehistory-form.component';

// chart
import {BarChartDemoComponent} from './charts/bar-chart-demo';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';

//Home

import {whatarethevarioustypesoffunds} from './homepage/HomePageFolder/what-are-the-various-types-of-funds'
import {SocanIinvestnowformyvacation8monthslater} from './homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later';
import {WhyshouldoneinvestinMutualFunds} from './homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds';
import {canmutualfundshelpcreatewealth} from './homepage/HomePageFolder/can-mutual-funds-help-create-wealth';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule
({
  declarations: [
    AppComponent,
    CategoriesComponent,CategoryDetailFormComponent,CategoryFilterPipe,
    ProfileFormComponent, BuyerDeatilFormComponent,
    ViewCartFormComponent, PurchaseHistoryFormComponent,
    BarChartDemoComponent,
    whatarethevarioustypesoffunds,SocanIinvestnowformyvacation8monthslater,
    WhyshouldoneinvestinMutualFunds,canmutualfundshelpcreatewealth, HomepageComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, routing, 
    BrowserAnimationsModule, ReactiveFormsModule, MatSnackBarModule, 
    ChartsModule
  ],
  providers:[CategoriesService, UsersService, PurchasesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
