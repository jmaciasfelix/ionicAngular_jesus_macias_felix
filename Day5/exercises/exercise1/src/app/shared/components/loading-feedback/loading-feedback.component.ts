import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-feedback',
  templateUrl: './loading-feedback.component.html',
  styleUrls: ['./loading-feedback.component.scss']
})
export class LoadingFeedbackComponent implements OnInit {
  @Input() state: 'loading' | 'loaded' | 'error' = 'loading';

  constructor() {}

  ngOnInit() {}

  retry() {}
}
