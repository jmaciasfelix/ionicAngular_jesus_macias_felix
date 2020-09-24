import { Component } from "@angular/core";
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
export class SurveysListPage {
  public surveys: SurveyRow[];

  constructor(
    private authService: AuthService,
    private surveysService: SurveysService,
    public alertController: AlertController,
    private translateService: TranslateService
  ) {}

  ionViewWillEnter() {
    this.loadSurveys();
  }

  private loadSurveys(): void {
    this.surveysService.getSurveys().subscribe(
      (surveys: SurveyRow[]) => {
        this.surveys = surveys;
      },
      (error) => {
        //TOAST and RETRY
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
