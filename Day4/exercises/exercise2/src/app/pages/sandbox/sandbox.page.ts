//angular
import { Component, OnInit } from "@angular/core";
//router
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-sandbox",
  templateUrl: "./sandbox.page.html",
  styleUrls: ["./sandbox.page.scss"],
})
export class SandboxPage implements OnInit {
  public folder: string;
  public numElementExpandable: number;
  public totalUpVotes: number;
  public totalDownVotes: number;

  /**
   * Contructor
   * @param activatedRoute ActivatedRoute Needed to get path url
   */
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.numElementExpandable = 0;
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
    this.totalDownVotes = 0;
    this.totalUpVotes = 0;
  }
  /**
   * Function that calculates the number of expanded elements.
   * @param isHidden {boolean} Variable that indicates if an element is hidden (true) or visible (false)
   */
  expandableContentChanged(isHidden: boolean): void {
    isHidden ? this.numElementExpandable-- : this.numElementExpandable++;
  }
  /**
   * Calculate total number of votes up and down
   * @param upVotes {number}
   * @param downVotes {number}
   */
  calculateTotalVotes(vote:object): void{
    vote["upVote"] ? this.totalUpVotes+=vote["upVote"] :null ;
    vote["downVote"] ? this.totalDownVotes+=vote["downVote"] :null ;
  }
}
