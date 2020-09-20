//angular
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  public like: number;
  public dislike: number;
  public meanRating: number;
  @Input() defaultUpVotes: number = 0;
  @Input() defaultDownVotes: number = 0;
  @Output() change = new EventEmitter<object>();

  public ngOnInit(): void {
    this.like = +this.defaultUpVotes;
    this.dislike = +this.defaultDownVotes;
    this.meanRating = 0;
    this.updateMeanRating();
    this.change.emit({ upVote: this.like, downVote: this.dislike });
  }
  /**
   * Add a like
   */
  public likeClick(): void {
    this.like++;
    this.updateMeanRating();
    this.change.emit({ upVote: 1 });
  }

  /**
   * Add a dislike
   */
  public dislikeClick(): void {
    this.dislike++;
    this.updateMeanRating();
    this.change.emit({ downVote: 1 });
  }

  /**
   * Update the average of the ranking
   */
  private updateMeanRating(): void {
    const numVote: number = this.like + this.dislike;
    if (numVote === 0) {
      this.meanRating = 0;
    } else {
      this.meanRating = parseFloat((10 * (this.like / numVote)).toFixed(1));
    }
  }
}
