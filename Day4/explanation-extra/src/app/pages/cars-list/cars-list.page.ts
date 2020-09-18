// angular
import { Component, OnInit } from '@angular/core';

// ionic
import { NavController } from '@ionic/angular';

// services
import { CarsService } from '../../services';

// interfaces
import { Car } from '../../interfaces';

@Component({
  selector: 'app-cars-list',
  templateUrl: 'cars-list.page.html',
  styleUrls: ['cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
  public cars: Car[];

  /**
   * page constructor
   *
   * @param carsService cars service
   * @param navController ionic nav controller
   */
  constructor(
    private readonly carsService: CarsService,
    private readonly navController: NavController) { }

  /**
   * fired on component initialization
   */
  public ngOnInit(): void {
    this.cars = this.carsService.getCars();
  }

  /**
   * fired when user clicks on car
   *
   * @param index car index
   */
  public carPressed(index: number) {
    this.navController.navigateForward(['/cars', index]);
  }
}
