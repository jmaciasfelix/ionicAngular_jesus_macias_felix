import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { webSocket } from "rxjs/webSocket";

import { SurveyRow, SurveyBase } from "../models";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SurveysService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  public getSurveys(): Observable<SurveyRow[]> {
    return this.http.get<SurveyRow[]>(`${environment.apiUrl}/survey`, {
      headers: this.authService.getAuthHeaders(),
    });
  }

  public getSurveysUpdates(): Subject<SurveyBase[]> {
    return webSocket(`${environment.sockectUrl}/votes`);
  }
}
