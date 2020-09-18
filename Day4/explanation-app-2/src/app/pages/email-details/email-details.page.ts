import { Component, OnDestroy, OnInit } from '@angular/core';
import { Email } from '../../models/email.model';
import { ActivatedRoute } from '@angular/router';
import { EmailsService } from '../../services/emails.service';

@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.page.html',
  styleUrls: ['./email-details.page.scss'],
})
export class EmailDetailsPage implements OnInit, OnDestroy {

  public email: Email;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailsService: EmailsService
  ) { }

  public ngOnInit(): void {

    console.log('[EmailDetailsPage] ngOnInit');

    this.email = this.emailsService.getEmail(
      +this.activatedRoute.snapshot.paramMap.get('email-id')
    );
  }

  public ionViewDidEnter(): void {
    console.log('[EmailDetailsPage] ionViewDidEnter');
  }

  public ionViewDidLeave(): void {
    console.log('[EmailDetailsPage] ionViewDidLeave');
  }

  public ngOnDestroy(): void {
    console.log('[EmailDetailsPage] ngOnDestroy');
  }
}
