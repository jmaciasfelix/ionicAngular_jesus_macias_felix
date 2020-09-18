// angular
import { Injectable } from '@angular/core';

// interfaces
import { Car } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private readonly cars: Car[] = [
    {
      brand: 'BMW',
      model: '320',
      imgUrl: 'https://www.autofacil.es/elementosWeb/gestionCajas/AUF/Image/2020//serie-2019-14_g.jpg'
    },
    {
      brand: 'Audi',
      model: 'A5',
      imgUrl: 'https://d1eip2zddc2vdv.cloudfront.net/dphotos/750x400/15352-1528188276.jpg'
    },
    {
      brand: 'Seat',
      model: 'Ibiza',
      imgUrl: 'https://www.diariomotor.com/imagenes/picscache/1440x655c/seat_cupra_ibiza_concept_01-1_1440x655c.jpg'
    }
  ];

  /**
   * get all cars
   *
   * @returns array with cars
   */
  public getCars(): Car[] {
    return this.cars;
  }

  /**
   * get one car
   *
   * @param index car index
   * @returns car
   */
  public getCar(index: number): Car {
    return this.cars[index];
  }
}
