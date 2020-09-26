//angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// services
import { FruitService } from "../../services";

// interfaces
import { Fruit } from "../../interfaces";

@Component({
  selector: "app-fruit-details",
  templateUrl: "./fruit-details.page.html",
  styleUrls: ["./fruit-details.page.scss"],
})
export class FruitDetailsPage implements OnInit {
  public fruit: Fruit;

  /**
   * @param activatedRoute angular activated route
   * @param fruitService fruit service
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly fruitService: FruitService
  ) {}

  /**
   * fired on component initialization
   */
  public ngOnInit(): void {
    const nameFruit = this.activatedRoute.snapshot.paramMap.get("id");
    this.fruitService.getFruit(nameFruit).subscribe(
      fruit => this.fruit = fruit,
      ()=> console.log("Error get one fruit")
    );
  }
}
