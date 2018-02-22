import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { Console } from '@angular/core/src/console';

import { CategoriesService } from "./categories.service";
import { UsersService } from "../users/users.service";

import {MatSnackBar} from '@angular/material';
import { Location } from "@angular/common";

@Component({
      templateUrl:'./categorydetails-form.component.html',
      styleUrls: ['./categorydetails-form.component.css']
})

export class CategoryDetailFormComponent {
  // category edit
  editMode: boolean;
  editAlert: boolean;
  msg: string;
  
  // category form
  catg_id: string;
  category: any;
  
  // image src variables
  catgImgSrcPrefix: string;
  schImgSrcPrefix: string;
  imgJPGExtension: string;

  // scheme edit
  schemeEditMode: boolean;
  schemeEditAlert: boolean;
  schemeMsg: string;

  // scheme view modal
  schemeViewModal: any;
  // scheme_idVM: string;
  // s_nameVM: string;
  // s_descriptionVM: string;
  // NAVVM: string;
  // soldVM: string;
  // last_modifiedVM: string;
  // s_imgVM: string;

  // scheme add modal
  scheme_idAM: string;
  s_nameAM: string;
  s_descriptionAM: string;
  NAVAM: string;
  soldAM: string;
  last_modifiedAM: string;

  img_colors : string[];

  // for cart
  cartContent: number;
  userDetails: any;

  constructor(private _usersService: UsersService, 
              private _categoryService: CategoriesService,
              private _router: Router,  
              private _route: ActivatedRoute,
              private _location: Location,
              public  _snackBar: MatSnackBar)
  {
    console.log("Initializing category details component constructor ...");
    // category edit
    this.editMode = false;
    this.editAlert = false;
    this.msg = "";

    // image src variables
    this.catgImgSrcPrefix= "../../assets/images/category/";
    this.schImgSrcPrefix= "../../assets/images/scheme/";
    this.imgJPGExtension = ".jpg";

    // category form
    this.catg_id="";
    this.category = {};
    this.category.scheme = {};

    // scheme edit
    this.schemeEditMode = false;
    this.schemeEditAlert = false;
    this.schemeMsg = "";

    // scheme view modal
    this.schemeViewModal = {};

    // scheme add modal
    this.resetAddSchemeForm();

    this.img_colors = this._categoryService.img_colors;

    this._route.params.subscribe((params: Params) => {
      this.catg_id = params['catg_id'];
      this.getCategory(this.catg_id);
    });

    // for cart
    this.cartContent = 0;
    this.userDetails = {};
    this.userDetails.cart = [];
    this.getUserDetails();
    this.cartTotalContent();

    console.log("Form Value = " + this.category);
  }

  getCategory(catg_id: string)
  {
    this._categoryService.getCategory(catg_id)
        .subscribe(_category => {
          this.category = _category;
    });
  }

  getUserDetails()
  {
    var _u = this._usersService.getUserInfo();

    if (!_u)
    {
      let msg = "You are not logged in";
      console.log(msg);
            
      // this._snackBar.open(msg, "", {
      //         duration: 5000
      // });
    }
    else 
    {
      // get user info
      this._usersService.getUser(_u.user_id)
        .subscribe(_user => {
          this.userDetails = _user;
          this.cartTotalContent();
      });
    }
  }

  editClicked() 
  {
    this.editMode = true;
    this.msg = "";
    this.editAlert = false;
  }

  editSchemeClicked()
  {
    this.schemeEditMode = true;
    this.schemeMsg = "";
    this.schemeEditAlert = false;
  }

  viewSchemeData(scheme)
  {
    this.schemeViewModal = scheme;
    // this.s_nameVM = scheme.s_name;
    // this.s_descriptionVM = scheme.s_description;
    // this.NAVVM = scheme.NAV;
    // this.soldVM = scheme.sold;
    // this.last_modifiedVM = scheme.last_modified;
    // this.s_imgVM = scheme.s_img;
  }

  resetValues()
  {
    this._categoryService.getCategory(this.catg_id)
          .subscribe(_category => {
            this.category = _category;
    });
    this.editMode = false;
    this.editAlert = false;
  }

  resetSchemeValues()
  {
    // this._categoryService.getCategory(this.catg_id)
    //       .subscribe(_category => {
    //         this.category = _category;
    // });
    this.schemeEditMode = false;
    this.schemeEditAlert = false;
  }

  resetAddSchemeForm()
  {
    this.scheme_idAM = "";
    this.s_nameAM = "";
    this.s_descriptionAM = "";
    this.NAVAM = "";
    this.soldAM = "";
    this.last_modifiedAM = "";
  }

  // resetViewSchemeForm()
  // {
  //   this.scheme_idVM = "";
  //   this.s_nameVM = "";
  //   this.s_descriptionVM = "";
  //   this.NAVVM = "";
  //   this.soldVM = "";
  //   this.last_modifiedVM = "";
  //   this.s_imgVM = "";
  // }

  dismissAlert()
  {
    this.msg = "";
    this.editAlert = false;
  }

  dismissSchemeAlert()
  {
    this.schemeMsg = "";
    this.schemeEditAlert = false;
  }

  dismissSchemeModal()
  {
    this.resetAddSchemeForm();
    this.schemeViewModal = {};

    this.getCategory(this.catg_id);
  }

  onSaveChangesCatg(formValue: any) 
  {
    let updatedCategory = {
      catg_id: this.catg_id,
      c_name: formValue.categorynameE,
      c_description: formValue.cateorydescriptionE,
      c_img: formValue.c_imgE
    };

    this._categoryService.updateCategory(updatedCategory)
                 .subscribe(
                  _success => {
                    console.log("category request updated in db");
                    this.editAlert = true;
                    this.msg = "Updated "+ _success.name;
                    this.editMode = false;
                    //this._router.navigate(['']);
                  },
                  err => {
                    console.log("category request updated error");
                    this.editAlert = true;
                    this.msg = "Not modified. Error occured, verify the field values.";
                    //this.msg = err.error +" "+ err.msg;
                    //this._router.navigate(['']);
    });
  }

  onSaveChangesScheme(formValue: any, scheme_idE: string)
  {
    let updatedScheme = {
      catg_id: this.catg_id,
      scheme_id: scheme_idE,
      s_name: formValue.s_nameE,
      s_description: formValue.s_descriptionE,
      NAV: formValue.s_NAVE,
      s_img: formValue.s_imgE
    };

    this._categoryService.updateScheme(updatedScheme)
                 .subscribe(
                  _success => {
                    console.log("scheme request updated in db");
                    this.schemeEditAlert = true;
                    this.schemeMsg = "Updated "+ _success.name;
                    this.schemeEditMode = false;
                    //this._router.navigate(['']);
                  },
                  err => {
                    console.log("category request updated error");
                    this.schemeEditAlert = true;
                    this.schemeMsg = "Not modified. Error occured, verify the field values.";
                    //this.msg = err.error +" "+ err.msg;
                    //this._router.navigate(['']);
    });
  }

  onAddScheme(formValue: any)
  {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));

    let newScheme = {
          catg_id: this.catg_id,
          s_name: formValue.s_nameAM,
          s_description: formValue.s_descriptionAM,
          s_img: formValue.s_imgAM,
          NAV:formValue.NAVAM
    };

    this._categoryService.addScheme(newScheme)
      .subscribe(
        _success => {
          console.log("scheme request entered in db");

          let msg = "New scheme: "+ _success.name +" added.";
            this._snackBar.open(msg, "SUCCESS..!!", {
              duration: 5000
          });

          this.resetAddSchemeForm();
          //this._router.navigate(['']);
        },
        err =>
        {
          console.log("scheme request creation error");

          let msg = "Scheme: "+ formValue.s_nameAM +" not added. Please verify all fields.";
          this._snackBar.open(msg, "ERROR..!!", {
              duration: 5000
          });
          //this._router.navigate(['']);
        });
  }

  deleteScheme(id: string, name: string, reqFrom: string)
  {
    let delScheme = {
      catg_id: this.catg_id,
      scheme_id: id,
      s_name: name
    };

    this._categoryService.deleteScheme(delScheme)
        .subscribe(
          _success => {
            console.log("scheme deleted in db");

            // this.editAlert = true;
            // this.msg = "Updated "+ _success.name;
            // this.editMode = false;
            //this._router.navigate(['']);

            let msg = "Deleted scheme: "+name+ " from category: "+ this.category.c_name;
            this._snackBar.open(msg, "SUCCESS..!!", {
              duration: 5000
            });
            
            if (reqFrom == 'reqFromCard')
            {
              // get new category values
              this._categoryService.getCategory(this.catg_id)
                  .subscribe(_category => {
                    this.category = _category;
              });
            }
            else if (reqFrom == 'reqFromModal')
            {
              location.reload();
            }
        },
        err => {
          console.log("scheme delete request error");
          
          let msg = "Delete error for scheme: "+name;
            this._snackBar.open(msg, "ERROR..!!", {
              duration: 5000
          });
    });
  }

  addToCart(scheme: any, reqFrom: string)
  {
    var user = this._usersService.getUserInfo();
    this.cartContent++;

    if (!user)
    {
      let msg = "You are not logged in";
      console.log(msg);
            
      this._snackBar.open(msg, "", {
              duration: 5000
      });
    }
    else 
    {
      if (reqFrom == 'reqFromModal')
      {
        scheme = this.schemeViewModal;
      }
      
      let addSchemeToCart = {
        user_id: user.user_id,
        c_id: this.category.catg_id,
        c_name: this.category.c_name,
        s_id: scheme.scheme_id,
        s_name: scheme.s_name,
        s_img: scheme.s_img,
        NAV: scheme.NAV
      };

      this._usersService.addToCart(addSchemeToCart)
          .subscribe(
            _success => {
              let msg = "Added to cart: "+scheme.s_name;
              console.log(msg);
              
              this._snackBar.open(msg, "BUY NOW", {
                duration: 5000
              });
              this.getCategory(this.catg_id);
              this.getUserDetails();
            },
            err => {
              let msg = "Scheme not added to cart: "+scheme.s_name;
              console.log(msg);
              this.cartContent--;
              
              this._snackBar.open(msg, "Try again..!!", {
                duration: 5000
              });
          });
    }
  }

  cartTotalContent()
  {
    if (this.userDetails)
    {
      this.cartContent = 0;
      this.userDetails.cart.forEach(_scheme => {
        this.cartContent += _scheme.qty; 
      });
    }
    else 
    {
      console.log("No user info");
    }
  }

  inCart(s_id: string): boolean
  {
    var ret: boolean;
    ret = false;
      this.userDetails.cart.forEach(_scheme => {
        if (_scheme.s_id == s_id)
        {
          //console.log("sid matched: "+s_id)
          ret = true;
        }
      });

    return ret;
  }

} // CategoryDetailFormComponent
