import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoriesService } from "../categories/categories.service";
import { UsersService } from "../users/users.service";

import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector:'buyerdetail-form',
  templateUrl: './buyerdetail-form.component.html',
  
})
export class BuyerDeatilFormComponent
{
  users: any[];
  admin_id: string;

  constructor(private _usersService: UsersService, 
    private _categoryService: CategoriesService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    public  _snackBar: MatSnackBar)
  {
    console.log("Initializing all-categories-component constructor ...");

    this.users = [];

    if (!this._usersService.isAuthenticated()) {
      // not authenticated
      // display error message
      let msg = "Please login first";
      console.log(msg);

      this._snackBar.open(msg, "Authentication required..!!", {
        duration: 5000
      });

      this._router.navigate(['']);
    }
    else if (!this._usersService.isPrivilegeUser())
    {
      // not privileged
      // display error message
      let msg = "Not authorised to view this page, conatct admin";
      console.log(msg);

      this._snackBar.open(msg, "", {
        duration: 5000
      });

      this._router.navigate(['']);
    }

  }

  ngOnInit() {
    console.log("Initializing all-categories-component ngOnIt ...");

    this.getUsers();
    console.log(this.users);
    
  }

  getUsers()
  {
    this._usersService.getUsers()
        .subscribe(
          _users => {
            this.users = _users;
            this.getAdminId();
        });
  }

  getAdminId()
  {
    var _u = this._usersService.getUserInfo();
    this.admin_id = _u.user_id;
  }

  togglePrivilege(email_id, privilege)
  {
    let togPrivilege = {
      email_id: email_id,
      privilege: privilege
    };

    this._usersService.togglePrivilege(togPrivilege)
        .subscribe(
          _success => {
            let msg = "Privilege toggled for "+ email_id;

            if (privilege) {
              this._snackBar.open(msg, "Admin user", {
                duration: 3000 });
            }
            else
            {
              this._snackBar.open(msg, "Normal user", {
                duration: 3000 });
            }
          },
          err => {
            let msg = "Privilege toggle error for "+ email_id;

            this._snackBar.open(msg, "Try again..!!", {
                duration: 3000 });
          }
        );
  }



}