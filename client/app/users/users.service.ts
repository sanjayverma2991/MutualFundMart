import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserCookie } from "./users.cookie";

import {MatSnackBar} from '@angular/material';
import 'rxjs/add/operator/map'


@Injectable()
export class UsersService extends UserCookie
{
  user: any;

  private _userUrl: string;

  constructor(private _http: Http,
              private _router: Router, 
              private _route: ActivatedRoute,
              public _snackBar: MatSnackBar)
  {
    super();
    console.log("Initializing Users service ...");

    this.load();

    this._userUrl = "https://mutual-fund-mart.herokuapp.com/api/users/";
    this.user = {};
  }
  
  isAuthenticated(): boolean
  {
    let ret = false;
    this.user = JSON.parse(localStorage.getItem('mf_uinfo'));
    
    if(!this.user.auth){
      let msg = "Please login first, Authentication required!!";
      //console.log(msg);
        
        ret = false
    }
    else
      ret = true;

    return ret;
  }

  // check for admin or normal user
  isPrivilegeUser(user_id?: string): boolean
  {
    let ret = false;
    this.user = JSON.parse(localStorage.getItem('mf_uinfo'));

    if (this.user.privilege)
    {
      let msg = "Super User";
      //console.log(msg);

      ret = true;
    }
    else if (user_id)
    {
      if (user_id == this.user.user_id)
      {
        let msg = "Logged in as: "+this.user.f_name;
        //console.log(msg);

        ret = true;
      }
      else
      {
        let msg = "Trying unauthorized access";
        //console.log(msg);

        ret = false;
      }
    }
    else
    {
      let msg = "Normal/Anonymous user";
      //console.log(msg);

      ret = false
    }
    
    return ret;
  }

  getUsers() : any {
    return this._http.get(this._userUrl)
               .map(res => res.json());
  }

  getUser(id: any) : any {
    return this._http.get(this._userUrl+id)
               .map(res => res.json());
  }

  getUserInfo(): any
  {
    this.user = JSON.parse(localStorage.getItem('mf_uinfo'));

    if  (this.user.user_id == "")
      return false;
    else
      return this.user;
  }

  addUser(newUser: any) : any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(this._userUrl+'user_create', JSON.stringify(newUser), {headers: headers})
               .map(res => res.json());
  }

  updateUser(updatedUser: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(this._userUrl+updatedUser.user_id, JSON.stringify(updatedUser), {headers: headers})
               .map(res => res.json());
  }

  togglePrivilege(togPrivilege: any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.put(this._userUrl+"toggle_privilege", JSON.stringify(togPrivilege), {headers: headers})
               .map(res => res.json());
  }

  deleteUser(user_id: String) {
    return this._http.delete(this._userUrl+user_id)
                     .map(res => res.json());
  }

  login(uname: string, pwd: string)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(this._userUrl+'login', {uname:uname, pwd:pwd}, {headers: headers})
               .map(res => res.json());
  }

  addToCart(scheme: any)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.put(this._userUrl+"add_to_cart", JSON.stringify(scheme), {headers: headers})
               .map(res => res.json());
  }

}