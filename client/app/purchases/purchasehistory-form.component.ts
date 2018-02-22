import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { CategoriesService } from "../categories/categories.service";
import { UsersService } from "../users/users.service";
import { PurchasesService } from "./purchases.service";

import { MatSnackBar } from '@angular/material';
import { Location } from "@angular/common";

@Component({
  selector:'purchasehistory-form',
  templateUrl: './purchasehistory-form.component.html',
  styleUrls: ['./purchasehistory-form.component.css']
})
export class PurchaseHistoryFormComponent
{
  orders: any;

  constructor(private _userService: UsersService,
    private _categoryService: CategoriesService,
    private _purchaseService: PurchasesService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    public _snackBar: MatSnackBar) {
    console.log("Initializing purchase history component constructor...");

    this.orders = [];

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
    
    this.getPurchaseDetails();
    console.log("Form Value = " + JSON.stringify(this.orders, null, 4));
  }

  getPurchaseDetails()
  {
    if (this._userService.isPrivilegeUser())
    {
      // privileged user
      this._purchaseService.getPurchaseDetails()
          .subscribe(
            _orders => {
              this.orders = _orders;
      });
    }
    else
    {
      // not privileged user
      var _u = this._userService.getUserInfo();

      this._purchaseService.getPurchaseDetails(_u.email_id)
          .subscribe(
            _orders => {
              this.orders = _orders;
      });
    }

  }

}