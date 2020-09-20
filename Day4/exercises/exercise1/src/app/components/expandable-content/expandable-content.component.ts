//angular
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-expandable-content",
  templateUrl: "./expandable-content.component.html",
  styleUrls: ["./expandable-content.component.scss"],
})
export class ExpandableContentComponent implements OnInit {
  @Input() title: string = "TitleDefault";
  @Output() change = new EventEmitter<boolean>();
  
  public isHidden: boolean;
  public iconBtn: string;
  /**
   * constructor
   */
  constructor() {}

  ngOnInit(): void {
    this.isHidden = true;
    this.iconBtn = "add";
  }
  /**
   * Toggle status expanding or collapsing content
   */
  public handleExpandableContent(): void {
    this.isHidden = !this.isHidden;
    this.isHidden ? (this.iconBtn = "add") : (this.iconBtn = "remove");
    this.change.emit(this.isHidden);
  }
}
