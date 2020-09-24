import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
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
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  public performAuth(): void {
    const { email, password }: AuthCredentials = this.form.value;

    this.authService.login({ email: email, password: password }).subscribe(
      () => {
        console.log("LOGIN OK");
        this.router.navigate(["/surveys-list"]);
      },
      (error) => {
        console.log("LOGIN ERROR", error);
      }
    );
  }
}
