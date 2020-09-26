//angular
import { Component, OnInit, Input } from "@angular/core";
// ionic
import { NavController } from "@ionic/angular";
//interfaces
import { Fruit } from "src/app/interfaces";

@Component({
  selector: "app-expandable-content",
  templateUrl: "./expandable-content.component.html",
  styleUrls: ["./expandable-content.component.scss"],
})
export class ExpandableContentComponent implements OnInit {
  @Input() fruit: Fruit;

  public isHidden: boolean;
  public iconBtn: string;
  /**
   * 
   * @param navController ionic navController
   */
  constructor(private readonly navController: NavController) {}

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
  }
  /**
   * fired when user clicks on fruit
   */
  public fruitPressed():void {
    this.navController.navigateForward(["/fruit", this.fruit.name]);
  }
}
