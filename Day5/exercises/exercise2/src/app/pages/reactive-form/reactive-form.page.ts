//angular
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//validator
import { isNotTemporalEmailValidator } from "src/app/shared/utils/validators";
//services
import { UserService, ToastService } from "src/app/shared/services/";
//models
import { User, State } from "../../models";
import { ToastController } from "@ionic/angular";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.page.html",
  styleUrls: ["./reactive-form.page.scss"],
})
export class ReactiveFormPage {
  public state: State.LOADING | State.LOADED | State.ERROR = State.LOADED;
  public user: User;
  public isDisable: boolean;
  public form: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    birthDate: ["", [Validators.required]],
    sex: "",
    phone: "",
    email: [
      "",
      [Validators.required, Validators.email, isNotTemporalEmailValidator],
    ],
  });

  private toast: ToastService = new ToastService(new ToastController());
  

  /**
   * Contructor ReactiveForm
   * @param formBuilder FormBuilder angular
   * @param userService Service to get user
   * @param translateService Service i18n translate
   */
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private translateService: TranslateService
  ) {}

  /**
   * Submit form
   */
  public submitForm(): void {
    this.user = this.form?.value;
    this.isDisable = true;
    this.userService.updateUser(this.user).subscribe(
      () => {
        this.toast.presentToast(this.translateService.instant("TOAST.SUCCESS_UPDATE"));
        this.isDisable = false;
      },
      () => {
        this.toast.presentToast(this.translateService.instant("TOAST.ERROR_UPDATE"), "danger");
        this.isDisable = false;
      }
    );
  }
  /**
   * Reset form and load user.
   */
  public loadStaticUser() {
    this.reset();
    const user: User = this.userService.getStaticUser();
    this.form.patchValue(user);
    this.state = State.LOADED;
    this.toast.presentToast(this.translateService.instant("TOAST.SUCCESS_LOADED"), "success");
  }
  /**
   * Reset form and load back user
   */
  public loadBackUser() {
    this.state = State.LOADING;
    this.reset();
    this.userService.getUser().subscribe(
      (user) => {
        this.form.patchValue(user);
        this.state = State.LOADED;
        this.toast.presentToast(this.translateService.instant("TOAST.SUCCESS_LOADED"), "success");
      },
      () => {
        this.state = State.ERROR;
        this.toast.presentToast(this.translateService.instant("TOAST.ERROR_LOADED"), "danger");
      }
    );
  }
  /**
   * Reset form
   */
  public reset() {
    this.form.patchValue({
      name: null,
      birthDate: null,
      sex: null,
      phone: null,
      email: null,
    });
  }
  /**
   * Retry loas a user.
   * @param state State error
   */
  public loadUser(): void {
    this.loadBackUser();
  }
}
