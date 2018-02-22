import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from "./users.service";

//declare function popSnackBar(): any;
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})

export class ProfileFormComponent {
  // user form
  user: any;
  u_id: string;

  // user edit
  editMode: boolean;
  editAlert: boolean;
  msg: string;

  // image src variables
  userImgSrcPrefix: string;
  imgJPGExtension: string;
  imgPNGExtension: string

  constructor(private _usersService: UsersService,
    private _router: Router,
    private _route: ActivatedRoute,
    public _snackBar: MatSnackBar) {
    console.log("Initializing edit-category-component constructor ...");

    this.user = {};
    this.user.name = {};
    // user edit
    this.editMode = false;
    this.editAlert = false;
    this.msg = "";

    // image src variables
    this.userImgSrcPrefix = "../../assets/images/user/";
    this.imgJPGExtension = "..jpg";
    this.imgPNGExtension = ".png";

    this._route.params.forEach((params: Params) => {
      this.u_id = params['user_id'];
    });

    // auth guard
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
    else if (!this._usersService.isPrivilegeUser(this.u_id)) {
      let msg = "Not authorized user";
      console.log(msg);

      this._snackBar.open(msg, "", {
        duration: 5000
      });

      this._router.navigate(['']);
    }

    // get user info
    this._usersService.getUser(this.u_id)
      .subscribe(_user => {
        this.user = _user;
      });

    console.log("Form Value = " + this.user);
  }

  editClicked() {
    this.editMode = true;
    this.editAlert = false;
  }

  onSaveChanges(formValue: any) {
    let updatedUser = {
      user_id: this.user.user_id,
      f_name: formValue.f_nameE,
      l_name: formValue.l_nameE,
      phone: formValue.phoneE,
      gender: formValue.genderE
    };

    this._usersService.updateUser(updatedUser)
      .subscribe(
      _success => {
        console.log("user request updated in db");
        this.editAlert = true;
        this.msg = "Updated " + _success.name + "'s profile";
        this.editMode = false;
        //this._router.navigate(['']);
      },
      err => {
        console.log("user request updated error");
        this.editAlert = true;
        this.msg = "Not modified. Error occured, verify the field values.";
        //this.msg = err.error +" "+ err.msg;
        //this._router.navigate(['']);
      });
  }

  resetValues() {
    this._usersService.getUser(this.u_id)
      .subscribe(_user => {
        this.user = _user;
      });
    this.editMode = false;
    this.editAlert = false;
  }

  dismissAlert() {
    this.msg = "";
    this.editAlert = false;
  }
}