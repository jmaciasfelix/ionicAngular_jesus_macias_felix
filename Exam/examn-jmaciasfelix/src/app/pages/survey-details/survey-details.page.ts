import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { Survey, SurveyOption } from "src/app/shared/models";
import { SurveysService } from "src/app/shared/services/surveys.service";
import { ToastService } from "src/app/shared/services/toast.service";

@Component({
  selector: "app-survey-details",
  templateUrl: "./survey-details.page.html",
  styleUrls: ["./survey-details.page.scss"],
})
export class SurveyDetailsPage implements OnInit {
  public survey: Survey;
  public surveyOption: SurveyOption[];
  public percentage: string[];
  public isVisible: boolean = false;
  public isDisabled: boolean = false;
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
    this.presentLoading();
    const idSurvey: string = this.activatedRoute.snapshot.paramMap.get("id");
    this.surveysService.getSurveyById(idSurvey).subscribe(
      (survey) => {
        this.survey = survey;
        this.isVisible = true;
        if (survey.answered) {
          this.calculatePercentage();
        }
      },
      () => {
        this.toast.presentToast(
          this.translateService.instant("ERROR.LOADING_DATA", "danger")
        );
        this.router.navigate([`/surveys-list`]);
      }
    );
  }
  public sendOption(idOption: number): void {
    const id: number = this.survey.id;
    this.isDisabled = true;
    this.surveysService.updateSurveysById(id, idOption).subscribe(
      (exito) => {
        this.router.navigate([`/surveys-list`]);
      },
      (error) => {
        this.isDisabled = false;
      }
    );
  }

  public calculatePercentage(): void {
    let totalVotes = 0;
    this.surveyOption = this.survey.options;
    this.surveyOption.forEach(({ num_votes }) => (totalVotes += num_votes));
    this.percentage = this.surveyOption.map(
      ({ num_votes }) => ((num_votes * 100) / totalVotes).toFixed(2) + "%"
    );
  }

  public retractOption(): void{
    console.log("retract")
    this.surveysService.deleteVote(this.survey.id).subscribe(
      (exito) => {
        this.router.navigate([`/surveys-list`]);
        this.toast.presentToast(
          this.translateService.instant("SUCCESS.RETRACT")
        );
      },
      (error) => {
        this.isDisabled = false;
      }
    );
  }
}
