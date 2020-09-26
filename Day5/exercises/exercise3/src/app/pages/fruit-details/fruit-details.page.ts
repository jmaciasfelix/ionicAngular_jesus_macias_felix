//angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// services
import { FruitService } from "../../services";

// interfaces
import { Fruit } from "../../interfaces";
import { NavController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-fruit-details",
  templateUrl: "./fruit-details.page.html",
  styleUrls: ["./fruit-details.page.scss"],
})
export class FruitDetailsPage implements OnInit {
  public fruit: Fruit;
  public isLoaded: boolean = false;

  /**
   * @param activatedRoute angular activated route
   * @param fruitService fruit service
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly fruitService: FruitService,
    private readonly navController: NavController,
    private toastController: ToastController
  ) {}

  /**
   * fired on component initialization
   */
  public ngOnInit(): void {
    const nameFruit = this.activatedRoute.snapshot.paramMap.get("id");
    this.fruitService.getFruit(nameFruit).subscribe(
      (fruit) => {
        this.fruit = fruit;
        this.isLoaded = true;
      },
      () => {
        this.navController.navigateForward(["/"]);
        this.toastController;
      }
    );
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: "An error has occurred, please try again",
      color: "danger",
      duration: 2000,
    });
    toast.present();
  }

  public changeDescription() {
    this.fruitService.updateFruit(this.fruit).subscribe(
      (fruit) => console.log(fruit),
      (error) => console.log(error)
    );
  }
}
