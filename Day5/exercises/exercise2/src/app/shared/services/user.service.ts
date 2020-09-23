import { Injectable } from "@angular/core";
import { User } from "src/app/models/";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getStaticUser(): User {
    return {
      name: "Saúl",
      birthDate: "1989-07-12",
      sex: "male",
      phone: 1234,
      email: "smoro@atsistemas.com",
    };
  }

  public getUser(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/1`);
  }
  /**
   * update user from database
   * @param user Data to update the user.
   */
  public updateUser(user: User): Observable<any> {
    const body = user;
    const url = `${environment.apiUrl}/users/1`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    });
   return this.httpClient.patch(url, body, { headers: headers })
  }
}
