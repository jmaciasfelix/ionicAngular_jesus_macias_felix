//angular
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

// services
import { FruitService } from "../../services";

// interfaces
import { Fruit } from "../../models";
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
   * @param navController NavController angular
   *  @param toastController ToastController angular
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
        this.presentToast();
      }
    );
  }
  /**
   * Show a toast for 2 seconds
   * @param msg Message displayed on the toast
   * @param color Toast color
   */
  async presentToast(
    msg: string = "An error has occurred, please try again",
    color: string = "danger"
  ) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 2000,
    });
    toast.present();
  }
  /**
   * Change description of fruit
   */
  public changeDescription(): void {
    this.fruitService.updateFruit(this.fruit).subscribe(
      () => this.presentToast("Has been successfully modified", "success"),
      () => this.presentToast()
    );
  }
}
