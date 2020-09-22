import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { isNotTemporalEmailValidator } from 'src/app/shared/utils/validators';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss']
})
export class ReactiveFormPage implements OnInit {
  public user: User;
  public form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    birthDate: ['', [Validators.required]],
    sex: '',
    phone: '',
    email: ['', [Validators.required, Validators.email, isNotTemporalEmailValidator]]
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  public ngOnInit(): void {}

  public submit(): void {
    this.user = this.form?.value;
  }

  public loadStaticUser() {
    this.reset();

    const user: User = this.userService.getStaticUser();
    this.form.patchValue(user);
  }

  public loadBackUser() {
    this.reset();

    this.userService.getUser().subscribe(
      (user) => this.form.patchValue(user),
      (error) => console.log(error)
    );
  }

  public reset() {
    this.form.patchValue({
      name: null,
      birthDate: null,
      sex: null,
      phone: null,
      email: null
    });
  }
}
