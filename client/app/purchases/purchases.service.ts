import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class PurchasesService 
{
    private _purchaseUrl = "https://mutual-fund-mart.herokuapp.com/api/purchases/";
    //private _categoryUrl = "http://localhost:4444/api/categories/";
    //private _userUrl = "http://localhost:4444/api/categories/";

    constructor(private _http: Http)
    {
      console.log("Initializing Purchases service ...");
    }

    changeQty(_fund: any)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put(this._purchaseUrl+'change_qty', JSON.stringify(_fund), {headers: headers})
               .map(res => res.json());
    }

    delFromCart(_fund: any)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put(this._purchaseUrl+'del_from_cart', JSON.stringify(_fund), {headers: headers})
               .map(res => res.json());
    }

    purchase(_purchase: any)
    {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._purchaseUrl, JSON.stringify(_purchase), {headers: headers})
               .map(res => res.json());
    }

    getPurchaseDetails(_email_id?: string)
    {
        if(_email_id)
        {
            return this._http.get(this._purchaseUrl+_email_id)
               .map(res => res.json());
        }
        else
        {
            return this._http.get(this._purchaseUrl+"purchaseHistory")
               .map(res => res.json());
        }
    }
   
}