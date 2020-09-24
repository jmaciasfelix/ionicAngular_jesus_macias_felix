import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brands } from "../models";

@Injectable({
  providedIn: "root",
})
export class BrandService {
  public brands: Brands[];
  constructor(private httpClient: HttpClient) {}

  /** TODO
   *  
   */
  getBrands(): Observable<Brands[]>{
    return this.httpClient.get<Brands[]>(`${environment.apiUrl}/brands`);
  }
}
