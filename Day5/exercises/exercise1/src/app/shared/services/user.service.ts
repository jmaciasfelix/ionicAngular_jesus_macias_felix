import { Injectable } from '@angular/core';
import { User } from 'src/app/models/';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getStaticUser(): User {
    return { name: 'Saúl', birthDate: '1989-07-12', sex: 'male', phone: 1234, email: 'smoro@atsistemas.com' };
  }

  public getUser(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/users/1`);
  }
}
