import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-feedback',
  templateUrl: './loading-feedback.component.html',
  styleUrls: ['./loading-feedback.component.scss']
})
export class LoadingFeedbackComponent implements OnInit {
  //TODO: Pasar a enum 
  @Input() state: 'loading' | 'loaded' | 'error' = 'loading';
  /**
   * TODO:
   * Loading -> Se carga el spinner
   * Loaded -> Se carga ngContent
   * Error -> Mensaje de error con boton para reiniciar
   */
  /**
   * Click en retryButton se lanza un evento OUTPUT?
   */

  constructor() {}

  ngOnInit() {}

  retry() {}
}
