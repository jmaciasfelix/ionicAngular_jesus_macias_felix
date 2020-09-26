//angular
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// rxjs
import { Observable } from "rxjs";
//environment
import { environment } from "src/environments/environment";
//models
import { Brands } from "../models";

@Injectable({
  providedIn: "root",
})
export class BrandService {
  public brands: Brands[];
  /**
   * Contructor
   * @param httpClient HttpClient angular
   */
  constructor(private httpClient: HttpClient) {}

  /**
   *  Observable to get brands
   * @return Observable Brands[]
   */
  getBrands(): Observable<Brands[]> {
    return this.httpClient.get<Brands[]>(`${environment.apiUrl}/brands`);
  }
}
