import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriesService } from "../categories/categories.service";
import { UsersService } from "../users/users.service";
import { PurchasesService } from "../purchases/purchases.service";

import { MatSnackBar } from '@angular/material';
import { Location } from "@angular/common";

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar-chart-demo.html'
})
export class BarChartDemoComponent {

  ////// users bar chart //////////////////////////////////////
  users: any[];
  userChart: string;
  userChartReady: boolean;
  
  // user bar graph
  userBarOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  userBarType: string = 'bar';
  userBarLegend: boolean = true;

  // net fund
  userFundBarData: any[];
  userBarNetFundLabels: string[];
  userNetFundData: number[];
  userNetFundLabel: string;

  // net amount
  userAmountBarData: any[];
  userBarNetAmountLabels: string[];
  userNetAmountData: number[];
  userNetAmountLabel: string;
  /////////////////////////////////////////////////////////////

  ////// categories pie chart //////////////////////////////////////
  categories: any[];
  schemes: any[];
  catgChart: string;
  catgChartReady: boolean;
  
  catgPieLabels: string[]; // = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  catgPieData: any[]; // = [300, 500, 100];
  catgPieType: string = 'doughnut';  

  //////////////////////////////////////////////////////////////////

  ////// scheme line chart //////////////////////////////////////
  funds: any[];
  fundChart : string;
  fundChartReady: boolean;
  
  fundLineData: Array<any>; // = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  
  fundLineLabels: Array<any>; // = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  fundLineOptions:any = {
    responsive: true
  };
  
  fundLineColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  fundLineLegend:boolean = true;
  fundLineType:string = 'line';
  ///////////////////////////////////////////////////////////////

  constructor(private _userService: UsersService,
    private _categoryService: CategoriesService,
    private _purchaseService: PurchasesService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _snackBar: MatSnackBar) {
    console.log("Initializing chart component constructor ...");

    this.users = [];
    this.userChart = "";
    this.userChartReady = false;

    this.userFundBarData = [];
    this.userBarNetFundLabels = [];
    this.userNetFundData = [];
    
    this.userAmountBarData = [];
    this.userBarNetAmountLabels = [];
    this.userNetAmountData = [];
    
    // categories pie chart
    this.categories = [];
    this.schemes = [];
    this.catgChartReady = false;
    this.catgChart = "";

    this.catgPieLabels = [];
    this.catgPieData = [];

    // fund line chart
    this.funds = [];
    this.fundChartReady = false;
    this.fundChart = "sold";

    this.fundLineLabels = [];
    this.fundLineData = [];

    // auth guard
    if (!this._userService.isAuthenticated()) {
      // not authenticated
      // display error message
      let msg = "Please login first";
      console.log(msg);

      this._snackBar.open(msg, "Authentication required..!!", {
        duration: 5000
      });

      this._router.navigate(['']);
    }

    // get users info
    this.getAllUsers();

    // get categories info
    this.getAllCategories();
  }

  getAllUsers()
  {
    this._userService.getUsers()
        .subscribe(
          _users => {
            this.users = _users;
            // this.populateUserNetAmountGraph();
            // this.populateUserNetFundGraph();

            this.userChart = "net_funds";
            this.showUserChart();
            this.userChartReady = true;
    });
  }

  populateUserNetFundGraph()
  {

    this.users.sort( (a, b) => {
      return parseFloat(a.net_funds) - parseFloat(b.net_funds);
    });

    // reset all data
    this.userFundBarData = [];
    this.userBarNetFundLabels = [];
    this.userNetFundData = [];

    var purchasedFlag = false;

    for (let count=0; 
      count < this.users.length && count < 10; 
      count++) {
        if (this.users[count].net_funds)
        {
          purchasedFlag = true;
          this.userNetFundData.push(this.users[count].net_funds);
          this.userBarNetFundLabels.push(this.users[count].name.f_name);
        }
    }

    if (purchasedFlag)
    {
      this.userFundBarData = [
        {data: this.userNetFundData, label: "FUND"}
      ];
    }
    else
    {
      this.userFundBarData = [
        {data: [0], label: "No investors yet"}
      ];
    }
    
  }

  populateUserNetAmountGraph()
  {
    this.users.sort( (a, b) => {
      return parseFloat(a.net_amount) - parseFloat(b.net_amount);
    });

    // reset data
    this.userAmountBarData = [];
    this.userBarNetAmountLabels = [];
    this.userNetAmountData = [];

    var purchasedFlag = false;

    for (let count=0; 
        count < this.users.length && count < 10; 
        count++) {
          if (this.users[count].net_amount)
          {
            purchasedFlag = true;
            this.userNetAmountData.push(this.users[count].net_amount);
            this.userBarNetAmountLabels.push(this.users[count].name.f_name);
          }
    }

    if (purchasedFlag)
    {
      this.userAmountBarData = [
        {data: this.userNetAmountData, label: "AMOUNT"}
      ];
    }
    else{
      this.userAmountBarData = [
        {data: [0], label: "No investors yet"}
      ];
    }
    
  }

  showUserChart()
  {
    if (this.userChart == "net_funds")
      this.populateUserNetFundGraph();
    else
      this.populateUserNetAmountGraph();
  }

/////////////////////////////////////////////////////////////////////////////

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

/////////////////////////////////////////////////////////////////////////
  getAllCategories()
  {
    this._categoryService.getCategories()
        .subscribe(
          _categories => {
            this.categories = _categories;

            this.catgChart = this.categories[0].catg_id;
            this.populateCatgGraph();
            this.populateFundGraph();
            this.catgChartReady = true;
            this.fundChartReady = true;
        });
  }
  
  populateCatgGraph()
  {
    //this.schemes = [];
    //console.log("catgchart: "+ this.catgChart)

    if (this.catgChart)
    {
      this.categories.forEach((_catg) => {
        if (_catg.catg_id == this.catgChart)
          this.schemes = _catg.scheme;
      });
    }
    else{
      console.log ("Undefined catg chart");
    }

    if (this.schemes.length)
    {
      this.schemes.sort( (a, b) => {
        return parseFloat(a.sold) - parseFloat(b.sold);
      });
    }
    else
    {
      console.log ("No schemes yet from category chart");
    }
    
    //this.catgPieLabels = [];
    //this.catgPieLabels.length = 0;
    //this.catgPieLabels.splice(0, this.catgPieLabels.length);
    //this.catgPieData = [];
    //this.catgPieData.length = 0;
    //this.catgPieData.splice(0, this.catgPieData.length);

    // reset datas
    while(this.catgPieLabels.length > 0) {
      this.catgPieLabels.pop();
    }
    while(this.catgPieData.length > 0) {
      this.catgPieData.pop();
    }

    var catgPieDataT: number[] = [];

    var soldFlag = false;

    for (let count=0; 
      count < this.schemes.length && count < 5; 
      count++) {
        if (this.schemes[count].sold)
        {
          soldFlag = true;
          catgPieDataT.push(this.schemes[count].sold);
          this.catgPieLabels.push(this.schemes[count].s_name);
        }
    }

    if (!soldFlag)
    {
      console.log("No funds are sold")
      this.catgPieLabels = ["No funds are sold"];
      this.catgPieData = [{data: [0], label: "No Data"}];
    }
    else{
      console.log("labels: "+this.catgPieLabels);
      console.log("data: "+catgPieDataT);
      this.catgPieData = [{data: catgPieDataT, label: ""}];
    }
  }
  /////////////////////////////////////////////////////////////////////////

  populateFundGraph()
  {
    if (this.fundChart)
    {
      this.funds = [];
      this.categories.forEach((_catg) => {
        // schemes
        _catg.scheme.forEach((_scheme) => {
          if (this.fundChart == "sold" && _scheme.sold > 0)
            this.funds.push(_scheme);
          else if (this.fundChart == "NAV" && _scheme.NAV > 0)
            this.funds.push(_scheme);
        });
      });
    }
    else{
      console.log ("Undefined fund chart");
    }

    if (this.funds.length)
    {
      if (this.fundChart == "sold")
        this.funds.sort( (a, b) => {
          return parseFloat(a.sold) - parseFloat(b.sold);
      });
      if (this.fundChart == "NAV")
        this.funds.sort( (a, b) => {
          return parseFloat(a.NAV) - parseFloat(b.NAV);
      });
    }
    else
    {
      console.log ("No funds are sold");
    }

    while(this.fundLineLabels.length > 0) {
      this.fundLineLabels.pop();
    }
    while(this.fundLineData.length > 0) {
      this.fundLineData.pop();
    }

    var _fundSoldLineData: number[] = [];
    var _fundNAVLineData: number[] = []

    var soldFlag = false;

    for (let count=0; 
      count < this.funds.length && count < 10; 
      count++) {
        if (this.fundChart == "sold" && this.funds[count].sold)
        {
          soldFlag = true;
          _fundSoldLineData.push(this.funds[count].sold);
          this.fundLineLabels.push(this.funds[count].s_name);
        }
        else if (this.fundChart == "NAV" && this.funds[count].NAV)
        {
          soldFlag = true;
          _fundNAVLineData.push(this.funds[count].NAV);
          this.fundLineLabels.push(this.funds[count].s_name);
        }
    }

    if (!soldFlag)
    {
      console.log("No funds are sold/NAV")
      this.fundLineLabels = ["No funds are sold/NAV"];
      this.fundLineData = [{data: [0], label: "No Data"}];
    }
    else{
      console.log("labels: "+this.fundLineLabels);
      console.log("data: "+_fundSoldLineData);

      if (this.fundChart == "sold")
        this.fundLineData = [
          {data: _fundSoldLineData, label: "SOLD"}];
      else if (this.fundChart == "NAV")
        this.fundLineData = [
          {data: _fundNAVLineData, label: "NAV"}];
    }
  }


}
