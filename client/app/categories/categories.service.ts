import { Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class CategoriesService 
{
  img_colors : string[] = ["DEBT", "EQUITY", "ETF", "FOF", "HYBRID", "LIQUID","HDFC","ICICI","SBI","AXIS"];
  // img_colors : string[] = ["HDFC","ICICI","SBI","AXIS","Equity"];
  
  constructor(private _http: Http)
    {
      console.log("Initializing Categories service ...");
   }
   private _categoryUrl = "http://localhost:4444/api/categories/";

  getCategories() : any {
    return this._http.get(this._categoryUrl)
               .map(res => res.json());
  }

  getCategory(id: any) : any {
    return this._http.get(this._categoryUrl+id)
               .map(res => res.json());
  }

  addCategory(newCategory: any) : any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(this._categoryUrl+'category_create', JSON.stringify(newCategory), {headers: headers})
               .map(res => res.json());
  }

  addScheme(newScheme: any) : any {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.put(this._categoryUrl+'scheme_create', JSON.stringify(newScheme), {headers: headers})
               .map(res => res.json());
  }

  updateCategory(updatedCategory: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put(this._categoryUrl+updatedCategory.catg_id, JSON.stringify(updatedCategory), {headers: headers})
               .map(res => res.json());
  }

  updateScheme(updatedScheme: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.put(this._categoryUrl+"scheme_edit", 
                JSON.stringify(updatedScheme), {headers: headers})
                .map(res => res.json());
  }

  deleteCategory(catg_id: String) {
    return this._http.delete(this._categoryUrl+catg_id)
                     .map(res => res.json());
  }

  deleteScheme(delScheme: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.put(this._categoryUrl+"scheme_del", JSON.stringify(delScheme), {headers: headers})
                     .map(res => res.json());
  }
}