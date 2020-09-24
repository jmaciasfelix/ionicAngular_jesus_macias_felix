import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

import { SurveyBase, SurveyRow } from "src/app/shared/models";
import { AuthService } from "src/app/shared/services/auth.service";
import { SurveysService } from "src/app/shared/services/surveys.service";

@Component({
  selector: "app-surveys-list",
  templateUrl: "./surveys-list.page.html",
  styleUrls: ["./surveys-list.page.scss"],
})
export class SurveysListPage implements OnInit {
  public surveys: SurveyRow[];

  constructor(
    private authService: AuthService,
    private surveysService: SurveysService,
    public alertController: AlertController,
    private translateService: TranslateService
  ) {}

  public ngOnInit(): void {
    this.loadSurveys(); // It's the correct position of call? https://ionicframework.com/docs/angular/lifecycle

    // TODO: REMOVEME It's just an example of how to use websockets!
    /**
      this.surveysService
      .getSurveysUpdates()
      .subscribe((surverys: SurveyBase[]) => {
        console.log("SURVEYS UPDATE!", surverys);
      });
     */
  }

  private loadSurveys(): void {
    this.surveysService.getSurveys().subscribe(
      (surveys: SurveyRow[]) => {
        console.log("LOAD SURVEYS OK", surveys);
        this.surveys = surveys;
      },
      (error) => {
        console.log("LOAD SURVEYS ERROR", error);
      }
    );
  }
  /**
   * Logout alert
   */
  async logoutAlertConfirm() {
    const alert = await this.alertController.create({
      header: this.translateService.instant("SURVEYS_LIST.ALERT_TITLE"),
      message: this.translateService.instant("SURVEYS_LIST.ALERT_DESCRIPTION"),
      buttons: [
        {
          text: this.translateService.instant("BUTTONS.CANCEL"),
          role: "cancel",
          handler: () => null,
        },
        {
          text: this.translateService.instant("BUTTONS.ACCEPT"),
          handler: () => {
            this.authService.logout();
            //TODO alert toast success
          },
        },
      ],
    });
    await alert.present();
  }
}
