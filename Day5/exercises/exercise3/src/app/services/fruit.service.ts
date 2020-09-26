//angular
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//interfaces
import { Fruit } from "../models";
//Rxjs
import { Observable } from "rxjs";
//environment
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FruitService {
  /**
   * Constructor
   * @param httpClient HttpClient Angular
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Get list of fruit from DB
   * @returns Observable Fruit[] with list fruits
   */
  public getListFruit(): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(`${environment.apiUrl}/fruits`);
  }
  /**
   * Get a fruit by id
   * @param id Id fruit
   * @returns Observable Fruit
   */
  public getFruit(id: string): Observable<Fruit> {
    return this.httpClient.get<Fruit>(`${environment.apiUrl}/fruits/${id}`);
  }
  /**
   * Update the description of Fruit from DB
   * @param fruit Fruit to update
   */
  public updateFruit(fruit: Fruit): Observable<any> {
    const body = fruit;
    const url = `${environment.apiUrl}/fruits/${fruit.id}`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    });
    return this.httpClient.put(url, body, { headers: headers });
  }
}
