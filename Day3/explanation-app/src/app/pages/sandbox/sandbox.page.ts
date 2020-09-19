import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.page.html",
  styleUrls: ["./sandbox.page.scss"],
})
export class SandboxPage implements OnInit {
  public like: number;
  public dislike: number;
  public meanRating: number;
  public isHidden: boolean;
  public iconBtn: string;

  public ngOnInit(): void {
    this.like = 0;
    this.dislike = 0;
    this.meanRating = 0;
    this.isHidden = true;
    this.iconBtn = "add";
  }
  /**
   * Add a like
   */
  public likeClick(): void {
    this.like++;
    this.updateMeanRating();
  }

  /**
   * Add a dislike
   */
  public dislikeClick(): void {
    this.dislike++;
    this.updateMeanRating();
  }

  public handleExpandableContent(): void {
    console.log("handleExpandableContent");
    this.isHidden = !this.isHidden;
    this.isHidden ? (this.iconBtn = "add") : (this.iconBtn = "remove");
  }

  /**
   * Update the average of the ranking
   */
  private updateMeanRating(): void {
    const numVote: number = this.like + this.dislike;
    this.meanRating = parseFloat((10 * (this.like / numVote)).toFixed(1));
  }
}
