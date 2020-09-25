import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from "src/app/shared/services/auth.service";
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthCredentials } from "../../shared/models";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  public form: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(5)]],
  });
  private toast: ToastService = new ToastService(new ToastController());
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
  ) {}

  public performAuth(): void {
    const { email, password }: AuthCredentials = this.form.value;

    this.authService.login({ email: email, password: password }).subscribe(
      () => {
        //TODO Avisar al user
        this.toast.presentToast(this.translateService.instant("SUCCESS.AUTHENTICATION"))
        this.router.navigate(["/surveys-list"]);
      },
      (error) => {
        //TODO avisar error al user
        this.toast.presentToast(this.translateService.instant("LOGIN.ERRORS.AUTH"),"danger")
      }
    );
  }
}
