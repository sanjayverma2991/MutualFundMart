import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from "./users/users.service";
import { CategoriesService } from "./categories/categories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // for signup
  f_nameSU: string;
  l_nameSU: string;
  email_idSU: string;
  phoneSU: string;
  genderSU: string;
  passwordSU: string;
  c_passwordSU: string;

  // for login
  usernameL: string;
  passwordL: string;

  msg: string;

  // for auth
  uinfo: any;
  f_name: string;
  u_id: string;
  auth: boolean;
  privilege: boolean;
  //hideModal: boolean;

  // navbar categories
  catgList: any[];

  ishome:boolean;


  constructor(private _usersService: UsersService,
              private _categoryService: CategoriesService,
              private _router: Router,
              private location: Location) {
    // for signup
    this.f_nameSU = "";
    this.l_nameSU = "";
    this.email_idSU = "";
    this.phoneSU = "";
    this.genderSU = "";
    this.passwordSU = "";
    this.c_passwordSU = "";

    // for login
    this.usernameL = "";
    this.passwordL = "";

    // navbar categories
    this.catgList = [];

    this.msg = "";

    this.uinfo = JSON.parse(localStorage.getItem('mf_uinfo'));
    this.f_name = this.uinfo.f_name;
    this.u_id = this.uinfo.user_id;
    this.auth = this.uinfo.auth;
    this.privilege = this.uinfo.privilege;
    //this.hideModal = false;
    this.getCategories();
  }

  ngOnInit()
  {
    this.ishome=location.pathname=='/'?true:false;
    console.log(location.pathname);
  }
  getCategories()
  {
    this._categoryService.getCategories()
        .subscribe(
          _categories => {
            this.catgList = _categories;
        });
  }

  onSignup(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));

    let newUser = {
      email_id: formValue.email_idSU,
      f_name: formValue.f_nameSU,
      l_name: formValue.l_nameSU,
      phone: formValue.phoneSU,
      gender: formValue.genderSU,
      passwd: formValue.passwordSU
    };

    this._usersService.addUser(newUser)
        .subscribe(
            _user => {
              console.log("user request entered in db");
              //this._router.navigate(['']);
              
              // for cookie
              this.auth = true;
              this.f_name = _user.f_name;
              this.u_id = _user.user_id;
              this.privilege = _user.privilege;

              let uc = {
                user_id: _user.user_id,
                email_id: _user.email_id,
                f_name: _user.f_name,
                l_name: _user.l_name,
                phone: _user.phone,
                loggedin: new Date(),
                auth: true,
                privilege: _user.privilege
              };
              
              localStorage.setItem('mf_uinfo', JSON.stringify(uc));
              location.reload();
            },
            
            err => {
              console.log("user request creation error");
              //this._router.navigate(['']);
        });
  } // signup

  onLogin(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));

    // let newUser = {
    //   email_id: formValue.usernameL,
    //   passwd: formValue.passwordL
    // };

    this._usersService.login(this.usernameL, this.passwordL)
    .subscribe(
      _result => {
        if (_result.failed) {
          this.msg = "Login failed: " + _result.failed;
          console.log(this.msg);
        //   this.snackBar.open(this.msg, "OK", {
        //    duration: 2000
        //  });
        }
        else if(_result.success) {
         this.msg = "Login success, "+ _result.f_name +"..!!";
         console.log(this.msg);
         //  this.snackBar.open(this.msg, "OK", {
         //   duration: 2000
         //  });
         this.auth = true;
         this.f_name = _result.f_name;
         this.u_id = _result.user_id;
         this.privilege = _result.privilege;

         let uc = {
          user_id: _result.user_id,
          email_id: _result.email_id,
          f_name: _result.f_name,
          l_name: _result.l_name,
          phone: _result.phone,
          loggedin: new Date(),
          auth: true,
          privilege: _result.privilege
         };
         localStorage.setItem('mf_uinfo', JSON.stringify(uc));
         //this.hideModal = true;
         location.reload();
        }
      },
      error => {
       this.msg = "Login error, try again..!!";
       console.log(this.msg);
      //  this.snackBar.open(this.msg, "OK", {
      //    duration: 2000
      //  });
      }
    )
  }

logout() {
  let uc = {
    user_id: "",
    email_id: "",
    f_name: "UNKNOWN",
    l_name: "",
    phone: "",
    loggedin: "",
    auth: false,
    privilege: false
   };
   localStorage.setItem('mf_uinfo', JSON.stringify(uc));

   this.auth = false;
   this.f_name = "UNKNOWN";
   this.u_id = "";
   this.privilege = false;

   //this._router.navigate(['']);
   location.reload();
  }
}
