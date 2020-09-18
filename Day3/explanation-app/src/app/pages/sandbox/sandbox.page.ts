import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.page.html",
  styleUrls: ["./sandbox.page.scss"],
})
export class SandboxPage implements OnInit {
  public like: number;
  public dislike: number;

  public ngOnInit(): void {
    this.like = 1;
    this.dislike = 0;
  }
}
