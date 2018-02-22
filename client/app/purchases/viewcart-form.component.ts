import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriesService } from "../categories/categories.service";
import { UsersService } from "../users/users.service";
import { PurchasesService } from "./purchases.service";

import { MatSnackBar } from '@angular/material';
import { Location } from "@angular/common";

@Component({
  selector: 'viewcart-form',
  templateUrl: './viewcart-form.component.html',
  styleUrls: ['./viewcart-form.component.css']
})

export class ViewCartFormComponent {
  user: any;
  netFundsQty: number;
  netFundsAmt: number;

  // image src variables
  schImgSrcPrefix: string;
  imgJPGExtension: string;
  imgPNGExtension: string

  constructor(private _userService: UsersService,
    private _categoryService: CategoriesService,
    private _purchaseService: PurchasesService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    public _snackBar: MatSnackBar) {
    console.log("Initializing cart component constructor ...");

    this.user = {};
    this.user.cart = {};
    this.netFundsAmt = 0;
    this.netFundsQty = 0;

    // image src variables
    this.schImgSrcPrefix = "../../assets/images/scheme/";
    this.imgJPGExtension = ".jpg";
    this.imgPNGExtension = ".png";

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

    // get user info
    this.getUserDetails();
  }

  getUserDetails() {
    var _u = this._userService.getUserInfo();

    if (_u) {
      // get user info
      this._userService.getUser(_u.user_id)
        .subscribe(_user => {
          this.user = _user;
          this.totalAmount();
        });
    }
  }

  changeQty(_fund: any) {
    if ((_fund.qty < 1) || (_fund.qty > 999)) {
      //_fund.qty = 1;
      this._snackBar.open("Qunatity should be in range of 1-999", "", {
        duration: 3000
      });
    }
    else {

      console.log("qty: " + _fund.qty);
      let newQty = {
        user_id: this.user.user_id,
        s_id: _fund.s_id,
        qty: _fund.qty,
      };

      this._purchaseService.changeQty(newQty)
        .subscribe(
        _success => {
          console.log("quantity changed in db");

          let msg = "Qunatity changed for " + _fund.s_name + " to " + _fund.qty;
          this._snackBar.open(msg, "", {
            duration: 3000
          });
        },
        err => {
          console.log("error changing qty in db");
          let msg = "Qunatity NOT changed for " + _fund.s_name + " to " + _fund.qty;
          this._snackBar.open(msg, "ERROR", {
            duration: 3000
          });
        });
    }

    this.getUserDetails();
  }

  delFromCart(_fund: any) {
    let delFund = {
      user_id: this.user.user_id,
      s_id: _fund.s_id,
      s_name: _fund.s_name
    };

    this._purchaseService.delFromCart(delFund)
      .subscribe(
      _success => {
        console.log("fund deleted in db");

        let msg = "Deleted fund: " + _fund.s_name;
        this._snackBar.open(msg, "SUCCESS..!!", {
          duration: 3000
        });

        this.getUserDetails();
      },
      err => {
        console.log("Fund delete request error");

        let msg = "Delete error for fund: " + _fund.s_name;
        this._snackBar.open(msg, "ERROR..!!", {
          duration: 3000
        });
      });
  }

  onPurchase() {
    let purchaseDetails = {
      user: this.user,
      net_amount: this.netFundsAmt,
      net_funds: this.netFundsQty
    }

    this._purchaseService.purchase(purchaseDetails)
        .subscribe (
          _success => {
            console.log("Purchase is done");
    
            let msg = "You bought all funds: " +this.netFundsQty;
            this._snackBar.open(msg, "CONGRATS", {
              duration: 5000
            });
    
            this.getUserDetails();
          },
          err => {
            console.log("Purchase error");
    
            let msg = "Purchase failed";
            this._snackBar.open(msg, "ERROR..!!", {
              duration: 5000
            });
        });
  }

  minusQty(_fund: any) {
    if (_fund.qty > 1) {
      console.log("minus: ");
      _fund.qty--;
      this.changeQty(_fund);
    }
    else {
      this._snackBar.open("Qunatity should be 1 or more", "USE REMOVE TO DELETE", {
        duration: 3000
      });
    }
  }

  addQty(_fund: any) {
    if (_fund.qty < 999) {
      console.log("add: ");
      _fund.qty++;
      this.changeQty(_fund);
    }
    else {
      this._snackBar.open("Qunatity should be 999 or less", "", {
        duration: 3000
      });
    }
  }

  totalAmount() {
    if (this.user) {
      this.netFundsQty = 0;
      this.netFundsAmt = 0;
      this.user.cart.forEach(_fund => {
        this.netFundsQty += _fund.qty;
        this.netFundsAmt += _fund.qty * _fund.NAV;
      });
    }
    else {
      console.log("No user info: netFundsDetails()");
    }
  }

  continueShopping() {
    this._location.back();
  }

}
