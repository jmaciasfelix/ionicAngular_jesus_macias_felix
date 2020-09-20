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

  /**
   * Contructor
   * @param activatedRoute ActivatedRoute Needed to get path url
   */
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.numElementExpandable = 0;
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }
  /**
   * Function that calculates the number of expanded elements.
   * @param isHidden boolean Variable that indicates if an element is hidden (true) or visible (false)
   */
  expandableContentChanged(isHidden: boolean): void {
    isHidden ? this.numElementExpandable-- : this.numElementExpandable++;
  }
}
