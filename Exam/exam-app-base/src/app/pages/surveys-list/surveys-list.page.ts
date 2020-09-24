import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

import { SurveyBase, SurveyRow } from "src/app/shared/models";
import { AuthService } from "src/app/shared/services/auth.service";
import { SurveysService } from "src/app/shared/services/surveys.service";
import { ToastService } from "src/app/shared/services/toast.service";

@Component({
  selector: "app-surveys-list",
  templateUrl: "./surveys-list.page.html",
  styleUrls: ["./surveys-list.page.scss"],
})
export class SurveysListPage {
  public surveys: SurveyRow[];
  private toast: ToastService = new ToastService(new ToastController());
  public isVisible: boolean = false;

  constructor(
    private authService: AuthService,
    private surveysService: SurveysService,
    public alertController: AlertController,
    private router: Router,
    private translateService: TranslateService
  ) {}

  ionViewWillEnter() {
    this.loadSurveys();
  }

  private loadSurveys(): void {
    this.surveysService.getSurveys().subscribe(
      (surveys: SurveyRow[]) => {
        this.surveys = surveys;
        console.log(surveys);
        this.toast.presentToast(
          this.translateService.instant("SUCCESS.LOADING_DATA")
        );
        this.isVisible = true;
      },
      (error) => {
        console.log("LOAD SURVEYS ERROR", error);
        this.authService.logout();
        this.toast.presentToast(
          this.translateService.instant("ERRORS.LOADING_DATA", "danger")
        );
        this.router.navigate(["/login"]);
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
            this.toast.presentToast(
              this.translateService.instant("SUCCESS.LOGOUT")
            );
          },
        },
      ],
    });
    await alert.present();
  }
}
