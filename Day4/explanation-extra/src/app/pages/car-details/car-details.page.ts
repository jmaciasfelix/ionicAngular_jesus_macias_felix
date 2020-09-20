// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { CarsService } from '../../services';

// interfaces
import { Car } from '../../interfaces';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  public car: Car;

  /**
   * page constructor
   *
   * @param activatedRoute angular activated route
   * @param carsService cars service
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly carsService: CarsService) { }

  /**
   * fired on component initialization
   */
  public ngOnInit(): void {
    const index = +this.activatedRoute.snapshot.paramMap.get('index');
    this.car = this.carsService.getCar(index);
    console.log(this.car);
  }
}
