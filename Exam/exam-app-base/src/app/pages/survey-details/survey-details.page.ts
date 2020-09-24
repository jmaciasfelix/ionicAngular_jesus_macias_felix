import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { Survey } from "src/app/shared/models";
import { SurveysService } from "src/app/shared/services/surveys.service";
import { ToastService } from "src/app/shared/services/toast.service";

@Component({
  selector: "app-survey-details",
  templateUrl: "./survey-details.page.html",
  styleUrls: ["./survey-details.page.scss"],
})
export class SurveyDetailsPage implements OnInit {
  public survey: Survey;
  public isVisible: boolean = false;
  private toast: ToastService = new ToastService(new ToastController());

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private surveysService: SurveysService,
    public loadingController: LoadingController,
    private translateService: TranslateService,
    private router: Router
  ) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: this.translateService.instant("LOADING"),
      duration: 2000,
    });
    await loading.present();
  }

  ngOnInit() {
    console.log("Entro");
    this.presentLoading();
    const idSurvey: string = this.activatedRoute.snapshot.paramMap.get("id");
    this.surveysService.getSurveyById(idSurvey).subscribe(
      (survey) => {
        console.log(survey);
        this.survey = survey;
        this.isVisible = true;
        this.toast.presentToast(
          this.translateService.instant("SUCCESS.LOADING_DATA")
        );
      },
      (error) => {
        //TODO toast error redirect back
        this.toast.presentToast(
          this.translateService.instant("ERROR.LOADING_DATA", "danger")
        );
        this.router.navigate([`/surveys-list`]);
      }
    );
  }
}
