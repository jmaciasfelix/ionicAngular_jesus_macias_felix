import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(private authService: AuthService, private router: Router) {}

  public performAuth(): void {
    this.authService.login({ email: 'smoro@atsistemas.com', password: 'smoro' }).subscribe(
      () => {
        console.log('LOGIN OK');
        this.router.navigate(['/surveys-list']);
      },
      (error) => {
        console.log('LOGIN ERROR', error);
      }
    );
  }
}
