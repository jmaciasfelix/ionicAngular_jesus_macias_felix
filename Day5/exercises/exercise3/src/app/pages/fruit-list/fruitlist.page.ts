//angular
import { Component, OnInit } from "@angular/core";
import { State } from "src/app/models";
//interface
import { Fruit } from "../../interfaces";
//services
import { FruitService } from "../../services";
@Component({
  selector: "app-fruit-list",
  templateUrl: "./fruitlist.page.html",
  styleUrls: ["./fruitlist.page.scss"],
})
export class FruitListPage implements OnInit {
  public state: State.LOADING | State.LOADED | State.ERROR = State.LOADING;
  public fruits: Fruit[];
  public folder: string;
  public numElementExpandable: number;

  /**
   * page constructor
   *
   * @param fruitService fruit service
   */
  constructor(private readonly fruitService: FruitService) {}

  /**
   * Initialize the page fruitlist
   */
  ngOnInit() {
    this.numElementExpandable = 0;
  }

  /**
   * ion View Will Enter ionic lyfe cicle
   */
  ionViewWillEnter() {
    this.state = State.LOADING;
    this.getListFruit();
  }
  /**
   * Function that calculates the number of expanded elements.
   * @param isHidden Variable that indicates if an element is hidden (true) or visible (false)
   */
  expandableContentChanged(isHidden: boolean): void {
    isHidden ? this.numElementExpandable-- : this.numElementExpandable++;
  }

  public getListFruit() {
    this.fruitService.getListFruit().subscribe(
      (listFruit) => {
        this.fruits = listFruit;
        this.state = State.LOADED;
      },
      () => (this.state = State.ERROR)
    );
  }
}
