import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

import { SurveyRow, SurveyBase } from '../models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  public getSurveys(): Observable<SurveyRow[]> {
    return this.http.get<SurveyRow[]>('http://207.154.215.142:3000/api/survey', { headers: this.authService.getAuthHeaders() });
  }

  public getSurveysUpdates(): Subject<SurveyBase[]> {
    return webSocket('ws://207.154.215.142:3030/votes');
  }
}
