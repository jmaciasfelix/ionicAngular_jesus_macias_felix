import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AuthCredentials, AuthResponse } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly accessTokenKey = 'accessToken';
  private accessToken: string;

  constructor(private http: HttpClient, private router: Router) {
    this.accessToken = sessionStorage.getItem(this.accessTokenKey);
  }

  public login(authCredentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, authCredentials).pipe(
      tap((authResponse: AuthResponse) => {
        this.accessToken = authResponse.access_token;
        sessionStorage.setItem(this.accessTokenKey, this.accessToken);
      })
    );
  }

  public logout(): void {
    this.accessToken = null;
    sessionStorage.removeItem(this.accessTokenKey);
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  public isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  public getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`
    });
  }
}
