// angular
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// interfaces
import { Fruit } from "../interfaces";
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

  public getListFruit(): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(`${environment.apiUrl}/fruits`);
  }
  public getFruit(id: string): Observable<Fruit> {
    return this.httpClient.get<Fruit>(`${environment.apiUrl}/fruits/${id}`);
  }
  public updateFruit(fruit: Fruit): Observable<any> {
    const body = fruit;
    const url = `${environment.apiUrl}/fruits/1`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    });
    return this.httpClient.patch(url, body, { headers: headers });
  }
}
