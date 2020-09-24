import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.page.html',
  styleUrls: ['./survey-details.page.scss'],
})
export class SurveyDetailsPage implements OnInit {

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
