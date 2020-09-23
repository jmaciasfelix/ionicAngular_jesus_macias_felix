//angular
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
//models
import { State } from "../../../models";

@Component({
  selector: "app-loading-feedback",
  templateUrl: "./loading-feedback.component.html",
  styleUrls: ["./loading-feedback.component.scss"],
})
export class LoadingFeedbackComponent implements OnInit {
  @Input() state: State.LOADING | State.LOADED | State.ERROR = State.LOADING;
  @Output() retryPressed = new EventEmitter<String>();

  public stateModel = State;
  public isDisableBtnSubmit = "false";

  /**
   * ngOnInit loadingfeedback
   */
  ngOnInit() {
  }

  /**
   * Retry function emit a event State.ERROR
   */
  retry(): void {
    this.retryPressed.emit(State.ERROR);
  }
}
