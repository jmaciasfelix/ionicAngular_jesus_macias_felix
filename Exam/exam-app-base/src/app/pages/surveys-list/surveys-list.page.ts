import { Component, OnInit } from '@angular/core';

import { SurveyBase, SurveyRow } from 'src/app/shared/models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SurveysService } from 'src/app/shared/services/surveys.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.page.html',
  styleUrls: ['./surveys-list.page.scss']
})
export class SurveysListPage implements OnInit {
  constructor(private authService: AuthService, private surveysService: SurveysService) {}

  public ngOnInit(): void {
    this.loadSurveys(); // It's the correct position of call? https://ionicframework.com/docs/angular/lifecycle

    // TODO: REMOVEME It's just an example of how to use websockets!
    this.surveysService.getSurveysUpdates().subscribe((surverys: SurveyBase[]) => {
      console.log('SURVEYS UPDATE!', surverys);
    });
  }

  private loadSurveys(): void {
    this.surveysService.getSurveys().subscribe(
      (surveys: SurveyRow[]) => {
        console.log('LOAD SURVEYS OK', surveys);
      },
      (error) => {
        console.log('LOAD SURVEYS ERROR', error);
      }
    );
  }

  public logout(): void {
    this.authService.logout();
  }
}
