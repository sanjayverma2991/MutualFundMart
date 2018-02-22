import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { Console } from '@angular/core/src/console';

import { CategoriesService } from "./categories.service";
import { UsersService } from "../users/users.service";

import {MatSnackBar} from '@angular/material';
import { Location } from "@angular/common";
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories: any[];
  title:string;

  // category add modal
  c_nameAM: string;
  c_descriptionAM: string;
  c_imgAM: string;

  // image src variables
  catgImgSrcPrefix: string;
  schImgSrcPrefix: string;
  imgJPGExtension: string;

  img_colors : string[];

  constructor(private _usersService: UsersService, 
              private _categoryService: CategoriesService,
              private _router: Router,
              private _route: ActivatedRoute,
              private _location: Location,
              public  _snackBar: MatSnackBar)
  {
    console.log("Initializing all-categories-component constructor ...");

    this.categories = [];

    // image src variables
    this.catgImgSrcPrefix= "../../assets/images/category/";
    this.schImgSrcPrefix= "../../assets/images/scheme/";
    this.imgJPGExtension = ".jpg";

    this.img_colors = this._categoryService.img_colors;

    // category add modal
    this.resetAddCatgForm();
  }

  ngOnInit() {
    console.log("Initializing all-categories-component ngOnIt ...");

    this.getCategories();
    console.log(this.categories);
  }

  getCategories()
  {
    this._categoryService.getCategories()
        .subscribe(
          _categories => {
            this.categories = _categories;
        });
  }

  resetAddCatgForm()
  {
    this.c_nameAM = "";
    this.c_descriptionAM = "";
    this.c_imgAM = "";
  }

  onAddCatg(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));

    let newCategory = {
        c_name: formValue.c_nameAM,
        c_description: formValue.c_descriptionAM,
        c_img: formValue.c_imgAM
    };

    this._categoryService.addCategory(newCategory)
        .subscribe(
          _success => {
            console.log("category request entered in db");

            let msg = "New category: "+ _success.name +" added.";
            this._snackBar.open(msg, "SUCCESS..!!", {
              duration: 5000
          });

          //this.resetAddCatgForm();
          //formValue.reset();
        },
        err => {
          console.log("category request creation error");

          let msg = "Category: "+ formValue.c_nameAM +" not added. Please verify all fields.";
          this._snackBar.open(msg, "ERROR..!!", {
              duration: 5000
          });
        });
  }

  deleteCategory(id: String, name: string)
  {
    this._categoryService.deleteCategory(id)
        .subscribe(
          _categories => {
            console.log("category deleted in db");

            this.categories = _categories;

            let msg = "Deleted category: "+name;
            this._snackBar.open(msg, "SUCCESS..!!", {
              duration: 5000
            });
          },
          err => {
            console.log("Category delete request error");
            
            let msg = "Delete error for category: "+name;
              this._snackBar.open(msg, "ERROR..!!", {
                duration: 5000
            });
          }
        );
  }

  dismissCatgModal()
  {
    this.resetAddCatgForm();

    this.getCategories();
  }
}
