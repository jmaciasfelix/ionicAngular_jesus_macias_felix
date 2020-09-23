//angular
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//validator
import { isNotTemporalEmailValidator } from "src/app/shared/utils/validators";
//services
import { UserService } from "src/app/shared/services/user.service";
//models
import { User, State } from "../../models";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.page.html",
  styleUrls: ["./reactive-form.page.scss"],
})
export class ReactiveFormPage {
  public state: State.LOADING | State.LOADED | State.ERROR = State.LOADED;
  public user: User;
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

  /**
   * Contructor ReactiveForm
   * @param formBuilder FormBuilder angular
   * @param userService Service to get user
   */
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  /**
   * Submit form
   */
  public submitForm(): void {
    this.user = this.form?.value;
  }
  /**
   * Reset form and load user.
   */
  public loadStaticUser() {
    this.reset();
    const user: User = this.userService.getStaticUser();
    this.form.patchValue(user);
    this.state = State.LOADED;
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
      },
      () => {
        this.state = State.ERROR;
      }
    );
  }
  /**
   * Reser form
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
   */
  public loadUser(): void {
    this.loadBackUser();
  }
}
