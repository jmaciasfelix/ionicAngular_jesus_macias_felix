//angular
import { Component, OnInit, Input } from "@angular/core";
//models
import { State } from "../../../models";

@Component({
  selector: "app-loading-feedback",
  templateUrl: "./loading-feedback.component.html",
  styleUrls: ["./loading-feedback.component.scss"],
})
export class LoadingFeedbackComponent implements OnInit {
  @Input() state: State.LOADING | State.LOADED | State.ERROR = State.LOADING;
  public stateModel: object = State;

  constructor() {}

  ngOnInit() {
    console.log("Enum State")
    console.log(State);
    console.log(`Input state ${this.state}`);
  }

  retry() {
    console.log("Retry");
  }
}
