import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailsService } from '../../services/emails.service';
import { Email } from '../../models/email.model';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.page.html',
  styleUrls: ['./emails-list.page.scss'],
})
export class EmailsListPage implements OnInit {

  public folder: string;

  public emails: Email[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailsService: EmailsService
  ) { }

  public ngOnInit(): void {

    this.folder = this.activatedRoute.snapshot.paramMap.get('folder-id');

    this.emails = this.emailsService.getEmails();
  }
}
